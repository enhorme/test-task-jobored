import { useParams } from 'react-router-dom'

import { useGetVacancyByIdQuery } from '../redux/api/vacanciesApi'
import { parseIdToInteger } from '../utils'

export const useSingleVacancyQuery = () => {
  const { id } = useParams()
  const { data, isLoading, isFetching, isError } = useGetVacancyByIdQuery(
    { id: parseIdToInteger(id) })

  return {
    vacancy: data,
    isLoading,
    isFetching,
    isError
  }
}