import { lazy, Suspense } from 'react'

import Pagination from '../Pagination'
import Spinner from '../Spinner'
import CardsList from './CardsList'
import { Error } from '../Error'
import { useVacanciesQuery } from '../../hooks/useVacanciesQuery'

const EmptyState = lazy(() => import('../EmptyState'))

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

  if (!vacancies.length) return <Suspense
    fallback={<Spinner />}><EmptyState /></Suspense>

  return (<>
    <CardsList vacancies={vacancies} />
    <Pagination totalPages={totalPages} currentPage={currentPage} />
  </>)
}

export default Cards