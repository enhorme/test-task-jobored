import { api } from './api'
import { setFavoriteData } from '../slices/favoriteSlice'
import queryString from 'query-string'

export const vacanciesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getVacancies: builder.query({
      query: (params) => {
        return {
          url: '/vacancies/',
          params: params
        }
      },
      transformResponse: (response) => {
        if (response?.objects?.length) {
          response.totalPages = response?.total > 500 ?
            125 :
            Math.ceil(response?.total / 4)
        }
        return response
      }
    }),
    getVacancyById: builder.query({
      query: ({ id }) => {
        return {
          url: `/vacancies/${id}/`
        }
      }
    }),
    getFavoritesByIds: builder.query({
      query: ({ ids }) => {
        return {
          url: `/vacancies/?${queryString.stringify({ ids },
            { arrayFormat: 'index' })}`
        }
      },

      async onQueryStarted(ids, { dispatch, queryFulfilled }) {
        try {
          const results = await queryFulfilled

          dispatch(setFavoriteData({
            data: results?.data?.objects,
            originalArgs: ids
          }))

        } catch (e) {
          console.error(e.message)
        }
      }
    })

  })
})
export const {
  useLazyGetFavoritesByIdsQuery,
  useGetVacanciesQuery,
  useGetVacancyByIdQuery
} = vacanciesApi