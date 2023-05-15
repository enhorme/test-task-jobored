import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  keyword: '',
  catalogues: '',
  payment_from: '',
  payment_to: '',
  page: 1,
  count: 4
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload }
    },
    setPage: (state, action) => {
      state.page = action.payload.page
    },
    setKeyword: (state, action) => {
      state.keyword = action.payload.keyword
    },
    resetFilter: () => {
      return initialState
    }
  }
})

export const {
  setFilters,
  setPage,
  setKeyword,
  resetFilter
} = filterSlice.actions

export default filterSlice.reducer
