import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'
import { ReactComponent as Next } from '../../assets/images/next_arrow.svg'
import { ReactComponent as Prev } from '../../assets/images/prev_arrow.svg'

import { setPage } from '../../redux/slices/filterSlice'

const Pagination = ({ data, currentPage }) => {
  const dispatch = useDispatch()

  function handlePageClick(e) {
    dispatch(setPage({ page: e.selected + 1 }))
  }

  return (
    <ReactPaginate
      className='pagination'
      breakLabel='...'
      nextLabel={<Next />}
      previousLabel={<Prev />}
      forcePage={currentPage - 1}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={data?.totalPages || 0}
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination
