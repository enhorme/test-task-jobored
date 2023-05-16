import { createSelector } from '@reduxjs/toolkit'

const selectFavorites = (state) => state.favorite
const selectFilter = (state) => state.filter
const setlectAuthState = (state) => state.auth

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

export {
  selectFavorites,
  selectFilter,
  setlectAuthState,
  selectDataAndTotalPagesForFavoritePage
}
