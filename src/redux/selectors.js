import { createSelector } from '@reduxjs/toolkit'

const selectFavorites = (state) => state.favorite
const selectFilter = (state) => state.filter
const selectFilterKeyword = (state) => state.filter.keyword

const selectFavoritesLS = (state) => state.favoritesLS.ids

const selectFilterWithoutEmptyFields = createSelector(
  [selectFilter],
  (filter) => {
    const filteredState = Object.keys(filter).reduce((result, key) => {
      const value = filter[key]
      if (key === 'page' || (value !== '' && value !== 0)) {
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

const selectFavoritesOriginalArgs = createSelector(selectFavorites,
  (favorites) => favorites.originalArgs)

const selectFavoritesData = createSelector([selectFavorites, selectFavoritesLS],
  (favorites, ids) => {
    return favorites?.data.filter((vacancy) => ids.includes(vacancy.id))
  })
const selectFavoritesTotalPages = createSelector(selectFavoritesData,
  (data) => Math.ceil(data.length / 4))

const selectFavoritesDataByPage = createSelector(
  [selectFavoritesData, selectFavoritesPage],
  (data, page) => {
    const vacanciesPerPage = 4
    const startIndex = page * vacanciesPerPage
    const endIndex = startIndex + vacanciesPerPage
    return data.slice(startIndex, endIndex)
  }
)

const selectDataAndTotalPagesForFavoritePage = createSelector(
  [
    selectFavoritesDataByPage,
    selectFavoritesTotalPages,
    selectFavoritesPage,
    selectFavoritesOriginalArgs],
  (dataByPage, totalPages, currentPage, originalArgs) => ({
    data: dataByPage,
    totalPages,
    currentPage,
    originalArgs
  })
)

const selectItemsIsInFavoritesLS = createSelector(
  [selectFavoritesLS, (_, id) => id],
  (ids, id) => {
    return ids?.includes(id)
  })

export {
  selectItemsIsInFavoritesLS,
  selectFavoritesLS,
  selectFilter,
  selectFilterKeyword,
  selectFavorites,
  selectFavoritesData,
  selectFilterWithoutEmptyFields,
  selectDataAndTotalPagesForFavoritePage
}
