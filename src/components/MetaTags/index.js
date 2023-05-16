import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

const MetaTags = () => {
  const [title, setTitle] = useState('home')
  const location = useLocation()

  useEffect(() => {
    setTitle(location.pathname.split('/').at(1) || 'home')
  }, [location])

  return (
    <Helmet>
      <title>{`Jobored | ${title}`}</title>


    </Helmet>
  )
}

export default MetaTags