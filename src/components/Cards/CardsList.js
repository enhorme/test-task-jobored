import EmptyState from '../EmptyState'
import CardItem from './CardItem'

const CardsList = ({ vacancies }) => {

  if (vacancies.length === 0) {
    return <EmptyState />
  }

  return (
    <ul className='cards-list'>
      {vacancies.map((vacancy) => (
        <CardItem key={vacancy.id} vacancy={vacancy} />
      ))}
    </ul>
  )
}

export default CardsList