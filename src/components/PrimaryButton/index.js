const PrimaryButton = ({ size = 'm', title, ...props }) => {
  return (
    <button
      className={`primary-button ${size === 'small' && 'primary-button-small'}`}
      {...props}
    >
      {title}
    </button>
  )
}

export default PrimaryButton