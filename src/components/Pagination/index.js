import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { ReactComponent as Next } from '../../assets/images/next_arrow.svg'
import { ReactComponent as Prev } from '../../assets/images/prev_arrow.svg'
import { setFavoritePage } from '../../redux/slices/favoriteSlice'
import { setPage } from '../../redux/slices/filterSlice'

const Pagination = ({ totalPages, currentPage }) => {
  const location = useLocation()
  const dispatch = useDispatch()

  function handlePageClick(e) {
    const page = e.selected
    dispatch(
      location.pathname === '/' ? setPage({ page }) : setFavoritePage({ page }))
  }

  return (
    <ReactPaginate
      className='pagination'
      breakLabel='...'
      nextLabel={<Next />}
      previousLabel={<Prev />}
      forcePage={currentPage}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={totalPages}
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination
