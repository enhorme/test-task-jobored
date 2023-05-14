import { NavLink } from 'react-router-dom'
import { ReactComponent as Location } from '../../assets/images/location.svg'
import { ReactComponent as Star } from '../../assets/images/star.svg'
import { conditionSalaryString } from '../../utils/'

const CardItem = ({ vacancy }) => {

  let {
    profession,
    id,
    town: { title: town },
    type_of_work: { title: workTime },
    payment_to,
    payment_from,
    currency,
    agreement
  } = vacancy

  const salary = conditionSalaryString({
    payment_from,
    payment_to,
    currency,
    agreement
  })

  return (
    <div className='card-item'>
      <div className='card-item__info'>
        <NavLink className='info__title' to={`/vacancies/${id}`}>
          {profession}
        </NavLink>
        <div className='info__job'>
          <span className='info__job__salary'>{salary}</span>
          <span className='info__job__divider'>•</span>
          <span className='info__job__time'>{workTime}</span>
        </div>
        <div className='info__location'>
          <Location />
          <span className='info__location__title'>{town}</span>
        </div>
      </div>
      <Star
        className={`card-item__favorites `}
      />
    </div>
  )
}

export default CardItem