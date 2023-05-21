import CardsList from '../components/Cards/CardsList'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import EmptyState from '../components/EmptyState'
import Spinner from '../components/Spinner'
import { useFavoritesQuery } from '../hooks/useFavoritesQuery'
import { Error } from '../components/Error'

const FavoritePage = () => {
  const {
    data,
    totalPages,
    currentPage,
    isLoading,
    isError,
    isFetching
  } = useFavoritesQuery()

  if (isLoading || isFetching) return <Spinner />

  if (isError) return <Error />

  if (!data?.length) return <EmptyState />

  return (<Container className='container-single'>
    <CardsList vacancies={data} />
    <Pagination currentPage={currentPage} totalPages={totalPages} />
  </Container>)
}

export default FavoritePage