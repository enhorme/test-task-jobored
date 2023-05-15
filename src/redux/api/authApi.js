import { authConfig } from '../../config/authConfig'
import { setCredentials } from '../slices/authSlice'
import { api } from './api'

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCredentials: builder.mutation({
      query: () => ({
        url: '/oauth2/password/',
        method: 'POST',
        params: authConfig,
        credentials: 'include'
      }),
      async onQueryStarted(
        arg,
        { dispatch, queryFulfilled }
      ) {
        const { data } = await queryFulfilled
        dispatch(
          setCredentials({
            token: data.access_token ?? null,
            refresh: data.refresh_token ?? null
          })
        )
      }
    })
  })
})
export const { useGetCredentialsMutation } = authApi
