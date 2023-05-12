import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = process.env.REACT_APP_PROXY_ENDPOINT
const XSECRETKEY = process.env.REACT_APP_XSECRETKEY
const CLIENT_SECRET = process.env.REACT_APP_AUTH_CLIENT_SECRET

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers) => {
    headers.set('x-secret-key', XSECRETKEY)
    headers.set('X-Api-App-Id', CLIENT_SECRET)
    return headers
  }
})

export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: (build) => ({})
})