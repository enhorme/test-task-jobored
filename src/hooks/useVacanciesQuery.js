import { useSelector } from 'react-redux'

import { selectFilterWithoutEmptyFields } from '../redux/selectors'
import { useGetVacanciesQuery } from '../redux/api/vacanciesApi'

export const useVacanciesQuery = () => {
  const filter = useSelector(selectFilterWithoutEmptyFields)
  const { data, isFetching, isLoading, isError } = useGetVacanciesQuery(filter)

  const vacancies = data?.objects || []

  return {
    vacancies,
    isFetching,
    isLoading,
    isError,
    totalPages: data?.totalPages,
    currentPage: filter?.page
  }
}
