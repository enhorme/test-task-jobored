import { createSlice } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    data: [],
    page: 0,
    originalArgs: []
  },
  reducers: {
    addToFavorite: (state, action) => {
      state.data.push(action.payload)

    },
    removeFromFavorite: (state, action) => {
      state.data = state.data.filter(
        (vacancy) => vacancy.id !== action.payload.id)
      const totalAPages = Math.ceil(state.data.length / 4)
      if (totalAPages <= state.page) {
        state.page = Math.max(state.page - 1, 0)
      }
    },
    setFavoritePage: (state, action) => {
      state.page = action.payload.page
    },
    setFavoriteData: (state, action) => {
      state.data = action.payload.data
      state.originalArgs = action.payload.originalArgs.ids
    }
  }
})

export const {
  setFavoriteData,
  addToFavorite,
  removeFromFavorite,
  setFavoritePage
} = favoriteSlice.actions

export default favoriteSlice.reducer
