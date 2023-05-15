import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { authConfig } from '../../config/authConfig'
import { setCredentials } from '../slices/authSlice'

const BASE_URL = process.env.REACT_APP_PROXY_ENDPOINT
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

    return headers
  }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const auth = api.getState().auth
  if (!auth.token || auth.token.ttl < Date.now() / 1000) {

    const { data } = await baseQuery({
      url: 'oauth2/password/',
      method: 'POST',
      params: authConfig,
      credentials: 'include'
    }, api, extraOptions)

    api.dispatch(setCredentials({
      token: data?.access_token,
      refresh: data?.refresh_token,
      ttl: data?.ttl
    }))
  }
  return baseQuery(args, api, extraOptions)
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({})
})