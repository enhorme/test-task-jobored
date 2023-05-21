import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import CardsList from '../components/Cards/CardsList'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import {
  selectDataAndTotalPagesForFavoritePage,
  selectFavoritesLS
} from '../redux/selectors'
import EmptyState from '../components/EmptyState'
import { useLazyGetFavoritesByIdsQuery } from '../redux/api/vacanciesApi'
import Spinner from '../components/Spinner'
import { areArraysEqual } from '../utils'

const FavoritePage = () => {
  const ids = useSelector(selectFavoritesLS)
  const { data, totalPages, currentPage, originalArgs } = useSelector(
    selectDataAndTotalPagesForFavoritePage)

  const [
    getFavoritesQuery, {
      isLoading,
      isError,
      isFetching
    }] = useLazyGetFavoritesByIdsQuery()

  useEffect(() => {
    if (ids.length && !areArraysEqual(ids, originalArgs)) {
      getFavoritesQuery({ ids })
    }
// eslint-disable-next-line
  }, [])

  if (isLoading || isFetching) return <Spinner />

  if (isError) return <div>Error</div>

  if (!data?.length)
    return (
      <EmptyState />
    )

  return (<Container className='container-single'>
    <CardsList vacancies={data} />
    <Pagination currentPage={currentPage} totalPages={totalPages} />
  </Container>)
}

export default FavoritePage