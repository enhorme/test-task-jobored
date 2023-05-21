import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex'
import { authConfig } from '../../config/authConfig'
import { setCredentials } from '../slices/authSlice'

const mutex = new Mutex()

const BASE_URL = process.env.REACT_APP_PROXY_ALTERNATIVE_ENDPOINT
const XSECRETKEY = process.env.REACT_APP_XSECRETKEY
const CLIENT_SECRET = process.env.REACT_APP_AUTH_CLIENT_SECRET

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    headers.set('x-secret-key', XSECRETKEY)
    headers.set('X-Api-App-Id', CLIENT_SECRET)
    headers.set('content-type', 'application/x-www-form-urlencoded')

    return headers
  },
  timeout: 6000
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()

  let result = await baseQuery(args, api, extraOptions)
  const auth = api.getState().auth

  if (!auth.token || auth.ttl < Date.now() / 1000) {

    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      try {
        const { data } = await baseQuery({
          url: '/oauth2/password/',
          method: 'GET',
          params: authConfig,
          credentials: 'include'
        }, api, extraOptions)

        if (data) {
          api.dispatch(setCredentials({
            token: data?.access_token,
            ttl: data?.ttl
          }))
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
    }
  }
  return result
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({})
})