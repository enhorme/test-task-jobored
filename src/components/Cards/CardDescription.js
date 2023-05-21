import parse from 'html-react-parser'

const CardDescription = ({ vacancyHtml }) => {

  return (
    <div className='description'>
      <div id='description'>{parse(vacancyHtml)}</div>
    </div>
  )
}

export default CardDescription