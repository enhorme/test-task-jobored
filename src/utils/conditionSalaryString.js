export const conditionSalaryString = ({
                                        paymentFrom,
                                        paymentTo,
                                        currency,
                                        agreement
                                      }) => {

  if (agreement) {
    return 'з/п По договоренности'
  }
  
  let salary = 'з/п '
  if (paymentFrom) {
    salary += `от ${paymentFrom}`
  }
  if (paymentTo) {
    salary =
      paymentTo !== paymentFrom
        ? `з/п ${paymentFrom} - ${paymentTo}`
        : `з/п ${paymentFrom}`
  }
  if (currency && (paymentFrom || paymentTo)) {
    salary += ` ${currency}`
  }

  return salary
}
