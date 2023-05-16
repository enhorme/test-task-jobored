import { useLocation } from 'react-router-dom'
import CardDescription from '../components/Cards/CardDescription'
import CardItem from '../components/Cards/CardItem'
import Container from '../components/Container'
import Spinner from '../components/Spinner'
import { useGetVacancyByIdQuery } from '../redux/api/vacanciesApi'

const SingleVacancyPage = () => {
  const location = useLocation()
  const { data, isLoading, isFetching, isError } = useGetVacancyByIdQuery(
    { id: location.pathname.split('/').at(-1) })

  if (isLoading || isFetching) return <Spinner />
  if (isError) return <div>Error</div>
  return (
    <Container className='container-single'>
      <CardItem vacancy={data} />
      <CardDescription data={data?.vacancyRichText} />
    </Container>
  )
}

export default SingleVacancyPage