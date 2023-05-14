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
        </section>
      </Container>

    </main>
  )
}

export default HomePage