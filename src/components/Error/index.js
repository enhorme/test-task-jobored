import error from '../../assets/images/error.png'

export const Error = ({ text = 'Что-то пошло не так' }) => {
  return (
    <>
      <div className='error'>
        <span>{text}</span>
        <img src={error} alt='error' />
      </div>
    </>
  )
}