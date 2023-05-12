import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const MainLayout = () => {
  return (
    <>
      <header className='header'>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout