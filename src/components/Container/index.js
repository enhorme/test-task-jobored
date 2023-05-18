import classNames from 'classnames'

const Container = ({ children, className }) => {
  const containerClass = classNames('container', className)

  return <div className={containerClass}>{children}</div>
}

export default Container