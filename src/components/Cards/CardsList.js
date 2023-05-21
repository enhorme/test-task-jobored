import CardItem from './CardItem'

const CardsList = ({ vacancies }) => {

  return (
    <ul className='cards-list'>
      {vacancies.map((vacancy) => (
        <CardItem key={vacancy.id} vacancy={vacancy} />
      ))}
    </ul>
  )
}

export default CardsList