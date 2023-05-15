import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Location } from '../../assets/images/location.svg'
import { ReactComponent as Star } from '../../assets/images/star.svg'
import { selectFavorites } from '../../redux/selectors'
import {
  addToFavorite,
  removeFromFavorite
} from '../../redux/slices/favoriteSlice'
import { conditionSalaryString } from '../../utils/'

const CardItem = ({ vacancy }) => {
  const [inFavorites, setInFavorites] = useState(false)
  const favorites = useSelector(selectFavorites)

  const dispatch = useDispatch()

  const {
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

  useEffect(() => {
    if (favorites?.data?.findIndex((vacancy) => vacancy.id === id) !== -1) {
      setInFavorites(true)
    }
  }, [])

  const handleChangeFavorite = () => {
    if (inFavorites) {
      dispatch(removeFromFavorite({ id }))
    } else {
      dispatch(addToFavorite(vacancy))
    }
    setInFavorites((prev) => !prev)
  }

  return (
    <div className='card-item' data-elem={`vacancy-${id}`}>
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
        data-elem={`vacancy-${id}-shortlist-button`}
        onClick={handleChangeFavorite}
        className={`card-item__favorites ${
          inFavorites && 'card-item__favorites-liked'
        }`}
      />
    </div>
  )
}

export default CardItem