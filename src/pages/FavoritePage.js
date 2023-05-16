import { useSelector } from 'react-redux'
import CardsList from '../components/Cards/CardsList'
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
  return (<section className='favorites'>
    <CardsList vacancies={data} />
    <Pagination currentPage={currentPage} data={{ totalPages }} />
  </section>)
}

export default FavoritePage