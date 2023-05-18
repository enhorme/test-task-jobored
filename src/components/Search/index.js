import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { ReactComponent as SearchIcon } from '../../assets/images/search.svg'
import { setKeyword } from '../../redux/slices/filterSlice'

import PrimaryButton from '../PrimaryButton'

const Search = ({ placeHolder, buttonTitle }) => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setKeyword({ keyword: search }))
    setSearch('')
  }

  const handleChange = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
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
        disabled={!search && true}
        title={buttonTitle}
        size='small'
        type='submit'
      />
    </form>
  )
}

export default Search
