const CardDescription = ({ data }) => {
  return (
    <div className='description'
         dangerouslySetInnerHTML={{ __html: data }}></div>
  )
}

export default CardDescription