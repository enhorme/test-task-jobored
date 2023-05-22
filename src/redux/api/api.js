import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials } from '../slices/authSlice'
import { authConfig } from '../../config/authConfig'

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
  const auth = api.getState().auth
  let result = await baseQuery({
    ...args,
    headers: {
      ...args.headers,
      Authorization: `Bearer ${auth.token}`
    }
  }, api, extraOptions)

  if (result.error && result.error.status === 401) {
    try {
      const { data } = await baseQuery({
        url: '/oauth2/password/',
        method: 'GET',
        params: authConfig,
        credentials: 'include'
      }, api, extraOptions)

      if (data) {
        await api.dispatch(setCredentials({
          token: data?.access_token,
          refresh: data?.refresh_token,
          ttl: data?.ttl
        }))

        const newToken = api.getState().auth.token
        result = await baseQuery({
          ...args,
          headers: {
            ...args.headers,
            Authorization: `Bearer ${newToken}`
          }
        }, api, extraOptions)
      }

    } catch (e) {
      console.error(e.message)
    }
    return result
  }
  if (result?.error?.status === 410) {
    try {
      const { data } = await baseQuery({
        url: '/oauth2/refresh_token/',
        method: 'GET',
        params: {
          refresh_token: auth.refresh,
          client_id: authConfig.client_id,
          client_secret: authConfig.client_secret
        },
        credentials: 'include'
      }, api, extraOptions)

      if (data) {
        await api.dispatch(setCredentials({
          token: data?.access_token,
          refresh: data?.refresh_token,
          ttl: data?.ttl
        }))
        const newToken = api.getState().auth.token
        result = await baseQuery({
          ...args,
          headers: {
            ...args.headers,
            Authorization: `Bearer ${newToken}`
          }
        }, api, extraOptions)
      }
    } catch (e) {
      console.error(e.message)
    }
    return result
  }
  return result
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({})
})