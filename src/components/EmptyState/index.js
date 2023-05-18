import { useLocation } from 'react-router-dom'

import {
  ReactComponent as EmptyStateLogo
} from '../../assets/images/empty-state.svg'
import SecondaryButton from '../SecondaryButton/SecondaryButton'

const EmptyState = () => {
  const location = useLocation()
  return (
    <section className='empty'>
      <EmptyStateLogo />
      {location.pathname === '/favorites' &&
        <> <span className='empty___text'>Упс, здесь еще ничего нет!</span>
          <SecondaryButton text={'Поиск Вакансий'} /></>}

    </section>
  )
}

export default EmptyState