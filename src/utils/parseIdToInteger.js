export const parseIdToInteger = (string) => {
  const number = parseInt(string)
  if (isNaN(number)) {
    return 0
  }
  return number
}


