import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ReactComponent as SearchIcon } from '../../assets/images/search.svg'
import { setKeyword } from '../../redux/slices/filterSlice'

import PrimaryButton from '../PrimaryButton'
import { selectFilterKeyword } from '../../redux/selectors'

const Search = ({ placeHolder, buttonTitle }) => {
  const keyword = useSelector(selectFilterKeyword)
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setKeyword({ keyword: search }))
  }
  
  useEffect(() => {
    setSearch(keyword)
  }, [keyword])

  const handleChange = (e) => {
    if (e.key === 'Enter') {
      if (search) {
        handleSubmit()
      }
    } else {
      setSearch(e.target.value)
    }
  }

  return (
    <form className='search' onSubmit={handleSubmit}>
      <SearchIcon />
      <input
        data-elem='search-input'
        placeholder={placeHolder}
        className='search__input'
        type='text'
        value={search}
        onChange={handleChange}
      />
      <PrimaryButton
        title={buttonTitle}
        size='small'
        type='submit'
      />
    </form>
  )
}

export default Search
