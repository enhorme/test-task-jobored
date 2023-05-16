import { useLocation } from 'react-router-dom'
import CardDescription from '../components/Cards/CardDescription'
import CardItem from '../components/Cards/CardItem'
import Container from '../components/Container'
import EmptyState from '../components/EmptyState'
import Spinner from '../components/Spinner'
import { useGetVacancyByIdQuery } from '../redux/api/vacanciesApi'
import { parseIdToInteger } from '../utils'

const SingleVacancyPage = () => {
  const location = useLocation()
  const { data, isLoading, isFetching, isError } = useGetVacancyByIdQuery(
    { id: parseIdToInteger(location.pathname.split('/').at(-1)) })

  if (isLoading || isFetching) return <Spinner />
  if (isError) return <EmptyState />
  return (
    <Container className='container-single'>
      <CardItem vacancy={data} full={true} />
      <CardDescription data={data?.vacancyRichText} />
    </Container>
  )
}

export default SingleVacancyPage