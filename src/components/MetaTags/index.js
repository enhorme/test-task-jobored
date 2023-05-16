import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

const MetaTags = () => {
  const [title, setTitle] = useState('Home')
  const location = useLocation()

  useEffect(() => {
    const locName = location.pathname.split('/').at(1)
    const titleFromLocation = locName.charAt(0).toUpperCase() + locName.slice(1)
    setTitle(titleFromLocation || 'Home')
  }, [location])

  return (
    <Helmet>
      <title>{`Jobored | ${title}`}</title>
    </Helmet>
  )
}

export default MetaTags