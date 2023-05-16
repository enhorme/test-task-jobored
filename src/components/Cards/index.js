import { useSelector } from 'react-redux'
import { useGetVacanciesQuery } from '../../redux/api/vacanciesApi'
import { selectFilter } from '../../redux/selectors'
import Pagination from '../Pagination'
import Spinner from '../Spinner'
import CardsList from './CardsList'

const Cards = () => {
  const filter = useSelector(selectFilter)
  const { data, isFetching, isLoading, isError } = useGetVacanciesQuery(filter)

  if (isFetching || isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <div>Error</div>
  }

  const vacancies = data?.objects || []

  return (<>
    <CardsList vacancies={vacancies} />
    <Pagination data={data} currentPage={filter?.page} />
  </>)
}

export default Cards