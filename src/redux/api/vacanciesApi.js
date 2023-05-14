import { api } from './api'

export const vacanciesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getVacancies: builder.query({
      query: (params) => {
        return {
          url: '/vacancies/',
          params: params
        }
      }
    })
  })
})
export const { useGetVacanciesQuery } = vacanciesApi