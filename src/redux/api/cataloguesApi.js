import { api } from './api'

export const cataloguesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCatalogues: builder.query({
      query: () => ({
        url: '/catalogues/'
      })
    })
  })
})
export const { useGetCataloguesQuery } = cataloguesApi