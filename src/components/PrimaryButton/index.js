import { memo } from 'react'

const PrimaryButton = ({ size = 'm', title }) => {
  return (
    <button
      className={`primary-button ${size === 'small' && 'primary-button-small'}`}
      data-elem='search-button'

    >
      {title}
    </button>
  )
}

export default memo(PrimaryButton)