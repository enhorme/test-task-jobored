import { useVacanciesQuery } from '../../hooks/useVacanciesQuery'
import Pagination from '../Pagination'
import Spinner from '../Spinner'
import CardsList from './CardsList'
import EmptyState from '../EmptyState'
import { Error } from '../Error'

const Cards = () => {
  const {
    vacancies,
    isFetching,
    isLoading,
    isError,
    totalPages,
    currentPage
  } = useVacanciesQuery()

  if (isFetching || isLoading) return <Spinner />

  if (isError) return <Error />

  if (!vacancies.length) return <EmptyState />

  return (<>
    <CardsList vacancies={vacancies} />
    <Pagination totalPages={totalPages} currentPage={currentPage} />
  </>)
}

export default Cards