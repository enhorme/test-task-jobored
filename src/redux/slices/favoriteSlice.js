import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'favorites',
  initialState: {
    data: [],
    total: 0
  },
  reducers: {
    addToFavorite: (state, action) => {
      state.data.push(action.payload)
      state.total++
    },
    removeFromFavorite: (state, action) => {
      state.data = state.data.filter(
        (vacancy) => vacancy.id !== action.payload.id)
      state.total--
    }
  }
})

export const { addToFavorite, removeFromFavorite } = filterSlice.actions

export default filterSlice.reducer
