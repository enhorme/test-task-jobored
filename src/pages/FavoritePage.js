import { useSelector } from 'react-redux'
import CardsList from '../components/Cards/CardsList'
import Container from '../components/Container'
import EmptyState from '../components/EmptyState'
import Pagination from '../components/Pagination'
import { selectDataAndTotalPagesForFavoritePage } from '../redux/selectors'

const FavoritePage = () => {
  const { data, totalPages, currentPage } = useSelector(
    selectDataAndTotalPagesForFavoritePage)

  if (!data?.length)
    return (
      <EmptyState />
    )
  return (<Container className='container-single'>
    <CardsList vacancies={data} />
    <Pagination currentPage={currentPage} data={{ totalPages }} />
  </Container>)
}

export default FavoritePage