import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import FavoritePage from './pages/FavoritePage'
import HomePage from './pages/HomePage'

function App() {
  return <Routes>
    <Route element={<MainLayout />}>
      <Route path='/' element={<HomePage />} />
      <Route path='/favorites' element={<FavoritePage />} />
    </Route>
  </Routes>
}

export default App
