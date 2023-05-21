export const areArraysEqual = (arr1 = [], arr2 = []) => {
  if (arr1.length !== arr2.length) {
    return false
  }

  return arr1.every((num, index) => num === arr2[index])
}