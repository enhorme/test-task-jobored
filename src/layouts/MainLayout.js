import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import MetaTags from '../components/MetaTags'

const MainLayout = () => {

  return (
    <>
      <MetaTags />
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