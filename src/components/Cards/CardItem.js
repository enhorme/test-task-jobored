import classNames from 'classnames'

import { ReactComponent as Location } from '../../assets/images/location.svg'
import { ReactComponent as Star } from '../../assets/images/star.svg'

import { useCardItemLogic } from '../../hooks/useCardItemLogic'

const CardItem = ({ vacancy, full = false }) => {

  const {
    profession,
    id,
    town,
    workTime,
    salary,
    inFavorites,
    handleClick,
    handleChangeFavorite
  } = useCardItemLogic(vacancy)

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