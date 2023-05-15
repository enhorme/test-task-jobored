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
      transformResponse: (response, meta, arg) => {
        response.totalPages = response?.total > 500 ?
          125 :
          Math.ceil(response?.total / 4)
        return response
      }
    })

  })
})
export const {
  useGetVacanciesQuery
} = vacanciesApi