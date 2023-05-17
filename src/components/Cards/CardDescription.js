import parse from 'html-react-parser'

const CardDescription = ({ data }) => {

  return (
    <div className='description'>
      <div id='description'>{parse(data)}</div>
    </div>
  )
}

export default CardDescription