import { createSlice } from '@reduxjs/toolkit'

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    data: [],
    page: 1
  },
  reducers: {
    addToFavorite: (state, action) => {
      state.data.push(action.payload)

    },
    removeFromFavorite: (state, action) => {
      const newData = state.data.filter(
        (vacancy) => vacancy.id !== action.payload.id)
      if (Math.ceil(newData.length / 4) < state.page) {
        state.page = --state.page || 1
      }
      state.data = newData

    },
    setFavoritePage: (state, action) => {
      state.page = action.payload.page
    }
  }
})

export const {
  addToFavorite,
  removeFromFavorite,
  setFavoritePage
} = favoriteSlice.actions

export default favoriteSlice.reducer
