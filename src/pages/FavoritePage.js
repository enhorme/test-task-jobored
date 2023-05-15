import { useSelector } from 'react-redux'
import CardsList from '../components/Cards/CardsList'
import EmptyState from '../components/EmptyState'
import { selectFavorites } from '../redux/selectors'

const FavoritePage = () => {
  const favorites = useSelector(selectFavorites)
  if (!favorites?.data?.length)
    return (
      <EmptyState />
    )
  return <CardsList vacancies={favorites.data} />
}

export default FavoritePage