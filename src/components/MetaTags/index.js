import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import metaImg from '../../assets/images/meta.jpg'

const MetaTags = () => {
  const [title, setTitle] = useState('home')
  const location = useLocation()

  useEffect(() => {
    setTitle(location.pathname.split('/').at(1) || 'home')
  }, [location])

  return (
    <Helmet>
      <title>{`Jobored | ${title}`}</title>
      <meta name='description' content='Paralect Startup Summer 2023!' />

      {/*Google / Search Engine Tags */}
      <meta itemProp='name' content={`Jobored | ${title}`} />
      <meta itemProp='description'
            content='Paralect Startup Summer 2023!' />
      <meta itemProp='image' content={metaImg} />

      {/*Facebook Meta Tags*/}
      <meta property='og:url'
            content='https://jobored-paralect.netlify.app' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={`Jobored | ${title}`} />
      <meta property='og:description'
            content='Paralect Startup Summer 2023!' />
      <meta property='og:image' content={metaImg} />

      {/*Twitter Meta Tags*/}
      <meta name='twitter:card'
            content='summary_large_image' />
      <meta name='twitter:title'
            content={`Jobored | ${title}`} />
      <meta name='twitter:description'
            content='Paralect Startup Summer 2023!' />
      <meta name='twitter:image' content={metaImg} />
    </Helmet>
  )
}

export default MetaTags