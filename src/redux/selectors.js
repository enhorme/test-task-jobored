import { createSelector } from '@reduxjs/toolkit'

const selectFavorites = (state) => state.favorite
const selectFilter = (state) => state.filter

const selectFilterWithoutEmptyFields = createSelector(
  [selectFilter],
  (filter) => {
    const filteredState = Object.keys(filter).reduce((result, key) => {
      const value = filter[key]
      if (value !== '' && value !== 0) {
        result[key] = value
      }
      return result
    }, {})

    if (filter.payment_to || filter.payment_from) {
      filteredState.no_agreement = 1
    }

    return filteredState
  }
)

const selectFavoritesPage = createSelector(selectFavorites,
  (favorites) => favorites.page)
const selectFavoritesData = createSelector(selectFavorites,
  (favorites) => favorites.data)
const selectFavoritesTotalPages = createSelector(selectFavoritesData,
  (data) => Math.ceil(data.length / 4))

const selectFavoritesDataByPage = createSelector(
  [selectFavoritesData, selectFavoritesPage],
  (data, page) => {
    const startIndex = (page - 1) * 4
    const endIndex = startIndex + 4
    return data.slice(startIndex, endIndex)
  }
)

const selectDataAndTotalPagesForFavoritePage = createSelector(
  [selectFavoritesDataByPage, selectFavoritesTotalPages, selectFavoritesPage],
  (dataByPage, totalPages, currentPage) => ({
    data: dataByPage,
    totalPages,
    currentPage
  })
)

const selectItemIsInFavorites = createSelector([selectFavorites, (_, id) => id],
  (favoriteData, id) => {
    return favoriteData?.data?.findIndex(
      (vacancy) => vacancy.id === id) !== -1
  })

export {
  selectItemIsInFavorites,
  selectFilter,
  selectFavorites,
  selectFavoritesData,
  selectFilterWithoutEmptyFields,
  selectDataAndTotalPagesForFavoritePage
}
