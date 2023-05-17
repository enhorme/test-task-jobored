import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import Container from '../Container'

const Header = () => {

  return (
    <Container className='header__container'>
      <div className='header__logo'>
        <Logo />
        <NavLink to='/'>Jobored</NavLink>
      </div>
      <nav>
        <ul className='nav__list'>
          <li className='nav__item'>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav__item-active' : 'nav__item'
              }
              to='/'
            >
              Поиск Вакансий
            </NavLink>
          </li>
          <li className='nav__item'>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav__item-active' : 'nav__item'
              }
              to='favorites'
            >
              Избранное
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

export default Header