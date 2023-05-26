import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useMatch, useNavigate } from 'react-router-dom'

import { selectItemsIsInFavoritesLS } from '../redux/selectors'
import { conditionSalaryString } from '../utils'
import {
  addIdToFavorite,
  removeIdFromFavorite
} from '../redux/slices/favoritesLSSlice'
import { removeFromFavorite } from '../redux/slices/favoriteSlice'

export const useCardItemLogic = (vacancy) => {

  const match = useMatch(`/vacancies/${vacancy.id}`)

  const isInFavorites = useSelector(
    (state) => selectItemsIsInFavoritesLS(state, vacancy.id))
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

  const salary = conditionSalaryString(
    { paymentFrom, paymentTo, currency, agreement })

  useEffect(() => {
    setInFavorites(isInFavorites)
  }, [isInFavorites])

  const handleClick = () => {
    if (match) return
    navigate(`/vacancies/${id}`)
  }

  const handleChangeFavorite = (e) => {
    e.stopPropagation()
    if (inFavorites) {
      dispatch(removeIdFromFavorite({ id }))
      dispatch(removeFromFavorite({ id }))
    } else {
      dispatch(addIdToFavorite(vacancy.id))
    }
    setInFavorites((prev) => !prev)
  }

  return {
    profession,
    id,
    town,
    workTime,
    salary,
    inFavorites,
    handleClick,
    handleChangeFavorite
  }
}