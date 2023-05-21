import CardDescription from '../components/Cards/CardDescription'
import CardItem from '../components/Cards/CardItem'
import Container from '../components/Container'
import Spinner from '../components/Spinner'
import { useSingleVacancyQuery } from '../hooks/useSingleVacancyQuery'
import { Error } from '../components/Error'

const SingleVacancyPage = () => {
  const { vacancy, isLoading, isFetching, isError } = useSingleVacancyQuery()

  if (isLoading || isFetching) return <Spinner />

  if (isError) return <Error />

  return (
    <Container className='container-single'>
      <CardItem vacancy={vacancy} full={true} />
      <CardDescription vacancyHtml={vacancy?.vacancyRichText} />
    </Container>
  )
}

export default SingleVacancyPage