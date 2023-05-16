import { api } from './api'

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
        response.totalPages = response?.total > 500 ?
          125 :
          Math.ceil(response?.total / 4)
        return response
      }
    }),
    getVacancyById: builder.query({
      query: ({ id }) => {
        return {
          url: `/vacancies/${id}/`
        }
      }
    })
  })
})
export const {
  useGetVacanciesQuery,
  useGetVacancyByIdQuery
} = vacanciesApi