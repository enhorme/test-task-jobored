import { useSelector } from 'react-redux'
import { useGetVacanciesQuery } from '../../redux/api/vacanciesApi'

import EmptyState from '../EmptyState'
import Spinner from '../Spinner'
import CardItem from './CardItem'

const CardsList = () => {
  const filter = useSelector(state => state.filter)
  const { data, isFetching, isLoading, isError } = useGetVacanciesQuery(filter)

  if (isFetching || isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <div>Error</div>
  }

  const vacancies = data?.objects || []

  if (vacancies.length === 0) {
    return <EmptyState />
  }

  return (
    <ul className='cards-list'>
      {vacancies.map((vacancy) => (
        <CardItem key={vacancy.id} vacancy={vacancy} />
      ))}
    </ul>
  )
}

export default CardsList