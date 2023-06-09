import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: 'PARALECTTESTTASK',
    token: null,
    refresh: null,
    ttl: null
  },
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token
      state.refresh = action.payload.refresh
      state.ttl = action.payload.ttl
    }
  }
})

export const { setCredentials } = authSlice.actions

export default authSlice.reducer