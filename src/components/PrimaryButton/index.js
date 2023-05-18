import { memo } from 'react'
import classNames from 'classnames'

const PrimaryButton = ({ size = 'm', title, ...props }) => {
  return (
    <button
      className={classNames('primary-button',
        { 'primary-button-small': size === 'small' })}
      data-elem='search-button'
      {...props}
    >
      {title}
    </button>
  )
}

export default memo(PrimaryButton)