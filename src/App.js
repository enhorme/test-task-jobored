import { Navigate, Route, Routes } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import FavoritePage from './pages/FavoritePage'
import HomePage from './pages/HomePage'
import SingleVacancyPage from './pages/SingleVacancyPage'

function App() {

  return <Routes>
    <Route element={<MainLayout />}>
      <Route path='/' element={<HomePage />} />
      <Route path='/favorites' element={<FavoritePage />} />
      <Route path='/vacancies/:id' element={<SingleVacancyPage />} />
      <Route
        path='*'
        element={<Navigate to='/' replace />}
      />
    </Route>
  </Routes>
}

export default App
