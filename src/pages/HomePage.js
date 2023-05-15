import Cards from '../components/Cards'
import Container from '../components/Container'
import Filter from '../components/Filter'

const HomePage = () => {
  return (
    <main>
      <Container className='main'>
        <Filter />
        <section>
          <Cards />
        </section>
      </Container>

    </main>
  )
}

export default HomePage