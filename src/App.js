import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import FavoritePage from './pages/FavoritePage'
import HomePage from './pages/HomePage'
import { useGetCredentialsMutation } from './redux/api/authApi'

function App() {
  const auth = useSelector(state => state.auth)
  const [authAuth] = useGetCredentialsMutation()
  useEffect(() => {
    if (!auth.token) {
      authAuth()
    }
  }, [])
  return <Routes>
    <Route element={<MainLayout />}>
      <Route path='/' element={<HomePage />} />
      <Route path='/favorites' element={<FavoritePage />} />
    </Route>
  </Routes>
}

export default App
