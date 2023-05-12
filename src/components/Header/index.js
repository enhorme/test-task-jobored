import { useGetCataloguesQuery } from '../../redux/api/cataloguesApi'

const Header = () => {
  const {
    data,
    isLoading,
    isFetching,
    isError,
    isSuccess
  } = useGetCataloguesQuery()

  console.log(data)
  return (
    <div>
      jobored
    </div>
  )
}

export default Header