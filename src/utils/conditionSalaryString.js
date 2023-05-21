export const conditionSalaryString = ({
                                        paymentFrom,
                                        paymentTo,
                                        currency,
                                        agreement
                                      }) => {
  if (agreement) {
    return 'з/п По договоренности'
  }

  if (!paymentTo && paymentFrom) {
    return `з/п от ${paymentFrom} ${currency}`
  }
  if (paymentTo && !paymentFrom) {
    return `з/п до ${paymentTo} ${currency}`
  }
  if (paymentFrom && paymentTo && paymentTo === paymentFrom) {
    return `з/п ${paymentTo} ${currency}`
  }

  return `з/п ${paymentFrom} - ${paymentTo} ${currency}`
}