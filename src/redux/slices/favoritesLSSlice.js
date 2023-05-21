import { createSlice } from '@reduxjs/toolkit'

const favoritesLSSlice = createSlice({
  name: 'favoritesLS',
  initialState: {
    ids: []
  },
  reducers: {
    addIdToFavorite: (state, action) => {
      state.ids.push(action.payload)

    },
    removeIdFromFavorite: (state, action) => {
      state.ids = state.ids.filter(
        (vacancyId) => vacancyId !== action.payload.id)
    }
  }
})

export const {
  addIdToFavorite,
  removeIdFromFavorite
} = favoritesLSSlice.actions

export default favoritesLSSlice.reducer