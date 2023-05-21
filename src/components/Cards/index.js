import { useSelector } from 'react-redux'

import { useGetVacanciesQuery } from '../../redux/api/vacanciesApi'
import { selectFilterWithoutEmptyFields } from '../../redux/selectors'

import Pagination from '../Pagination'
import Spinner from '../Spinner'
import CardsList from './CardsList'
import EmptyState from '../EmptyState'

const Cards = () => {
  const filter = useSelector(selectFilterWithoutEmptyFields)
  const { data, isFetching, isLoading, isError } = useGetVacanciesQuery(filter)

  if (isFetching || isLoading) return <Spinner />

  if (isError) return <div>Error</div>

  const vacancies = data.objects

  if (!vacancies.length)
    return (
      <EmptyState />
    )
  
  return (<>
    <CardsList vacancies={vacancies} />
    <Pagination totalPages={data.totalPages} currentPage={filter?.page} />
  </>)
}

export default Cards