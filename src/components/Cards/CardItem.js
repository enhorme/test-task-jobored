import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'

import { ReactComponent as Location } from '../../assets/images/location.svg'
import { ReactComponent as Star } from '../../assets/images/star.svg'
import { selectItemIsInFavorites } from '../../redux/selectors'

import {
  addToFavorite,
  removeFromFavorite
} from '../../redux/slices/favoriteSlice'
import { conditionSalaryString } from '../../utils/'

const CardItem = ({ vacancy, full = false }) => {
  const favoritesData = useSelector(
    (state) =>
      selectItemIsInFavorites(state, vacancy.id))

  const [inFavorites, setInFavorites] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    profession,
    id,
    town: { title: town },
    type_of_work: { title: workTime },
    payment_to: paymentTo,
    payment_from: paymentFrom,
    currency,
    agreement
  } = vacancy

  const salary = conditionSalaryString({
    paymentFrom,
    paymentTo,
    currency,
    agreement
  })

  useEffect(() => {

    setInFavorites(favoritesData)

  }, [favoritesData])

  const handleClick = () => {
    if (!full) navigate(`/vacancies/${id}`)
  }

  const handleChangeFavorite = (e) => {
    e.stopPropagation()
    if (inFavorites) {
      dispatch(removeFromFavorite({ id }))
    } else {
      dispatch(addToFavorite(vacancy))
    }
    setInFavorites((prev) => !prev)
  }

  return (
    <div className={classNames('card-item', { 'card-item-full': full })}
         data-elem={`vacancy-${id}`}
         onClick={handleClick}>
      <div className={classNames('card-item__info',
        { 'card-item__info-full': full })}>
        <span className={classNames('info__title',
          { 'info__title-full': full })}>
          {profession}
        </span>
        <div className='info__job'>
          <span className={classNames('info__job__salary',
            { 'info__job__salary-full': full })}>{salary}</span>
          <span className='info__job__divider'>•</span>
          <span className={classNames('info__job__time',
            { 'info__job__time-full': full })}>{workTime}</span>
        </div>
        <div className='info__location'>
          <Location />
          <span className='info__location__title'>{town}</span>
        </div>
      </div>
      <div data-elem={`vacancy-${id}-shortlist-button`}
           onClick={handleChangeFavorite}
           className={classNames('card-item__favorites', {
             'card-item__favorites-liked': inFavorites
           })}>
        <Star />
      </div>
    </div>
  )
}

export default CardItem