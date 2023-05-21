import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import {
  selectDataAndTotalPagesForFavoritePage,
  selectFavoritesLS
} from '../redux/selectors'
import { useLazyGetFavoritesByIdsQuery } from '../redux/api/vacanciesApi'
import { areArraysEqual } from '../utils'

export const useFavoritesQuery = () => {
  const ids = useSelector(selectFavoritesLS)
  const { data, totalPages, currentPage, originalArgs } = useSelector(
    selectDataAndTotalPagesForFavoritePage)

  const [
    getFavoritesQuery,
    { isLoading, isError, isFetching }
  ] = useLazyGetFavoritesByIdsQuery()

  useEffect(() => {
    if (ids.length && !areArraysEqual(ids, originalArgs)) {
      getFavoritesQuery({ ids })
    }
    // eslint-disable-next-line
  }, [])

  return {
    data,
    totalPages,
    currentPage,
    isLoading,
    isError,
    isFetching
  }
}
