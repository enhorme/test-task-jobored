const conditionSalaryString = ({
                                 payment_from,
                                 payment_to,
                                 currency,
                                 agreement
                               }) => {
  let salary = 'з/п '
  if (payment_from) {
    salary += `от ${payment_from}`
  }
  if (payment_to) {
    salary =
      payment_to !== payment_from
        ? `з/п ${payment_from} - ${payment_to}`
        : `з/п ${payment_from}`
  }
  if (currency && (payment_from || payment_to)) {
    salary += ` ${currency}`
  }
  if (agreement) {
    salary = 'з/п По договоренности'
  }
  return salary
}

const paginateFavoritesArrayForQuery = ({ ids, currentPage }) => {
  const totalPages = Math.ceil(ids.length / 4)
  const startIdx = (currentPage - 1) * 4
  const endIdx = startIdx + 4
  const currentPageItems = ids.slice(startIdx, endIdx)

  return { currentPageItems, totalPages }
}

export { conditionSalaryString, paginateFavoritesArrayForQuery }