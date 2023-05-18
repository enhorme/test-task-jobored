import { NavLink } from 'react-router-dom'

const SecondaryButton = ({ text }) => {
  return (
    <NavLink to='/' className='secondary-button'>
      {text}
    </NavLink>
  )
}

export default SecondaryButton