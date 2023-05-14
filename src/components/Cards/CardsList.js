import { Loader } from '@mantine/core'
import { useGetVacanciesQuery } from '../../redux/api/vacanciesApi'

import EmptyState from '../EmptyState'
import CardItem from './CardItem'

const CardsList = () => {
  const { data, isFetching, isLoading, isError } = useGetVacanciesQuery()

  if (isFetching || isLoading) {
    return <Loader />
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