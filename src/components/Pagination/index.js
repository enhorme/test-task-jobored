import React from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch, useSelector } from 'react-redux'
import { ReactComponent as Next } from '../../assets/images/next_arrow.svg'
import { ReactComponent as Prev } from '../../assets/images/prev_arrow.svg'
import { useGetVacanciesQuery } from '../../redux/api/vacanciesApi'
import { setPage } from '../../redux/slices/filterSlice'

const Pagination = () => {
  const dispatch = useDispatch()
  const query = useSelector((state) => state.filter)

  const { total } = useGetVacanciesQuery(query, {
    selectFromResult: ({ data }) => {
      const total = data?.total > 500 ? 125 : Math.ceil(data?.total / 4)
      return {
        total
      }
    }
  })

  function handlePageClick(e) {
    dispatch(setPage({ page: e.selected + 1 }))
  }

  return (
    <ReactPaginate
      className='pagination'
      breakLabel='...'
      nextLabel={<Next />}
      previousLabel={<Prev />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={total || 0}
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination
