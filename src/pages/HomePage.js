import Cards from '../components/Cards'
import Container from '../components/Container'
import Filter from '../components/Filter'
import Search from '../components/Search'

const HomePage = () => {
  return (
    <main>
      <Container className='main'>
        <Filter />
        <section>
          <Search />
          <Cards />
        </section>
      </Container>

    </main>
  )
}

export default HomePage