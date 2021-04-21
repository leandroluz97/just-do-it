//https://www.hackerrank.com/challenges/electronics-shop/problem?

function getMoneySpent(keyboards, drives, b) {
  let aux = -1
  let temp = 0

  for (let i = 0; i < keyboards.length; i++) {
    temp = 0
    for (let j = 0; j < drives.length; j++) {
      if (keyboards[i] + drives[j] <= b) {
        temp = keyboards[i] + drives[j]
        aux = temp > aux ? temp : aux
      }
    }
  }

  return aux
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10))
/*
const highestPrice = Math.max(...keyboards, ...drives)
  const sortedDrives = drives.sort()
  const sortedKeyboard = keyboards.sort()

  let auxArr = keyboards.includes(highestPrice) ? sortedKeyboard : sortedDrives
  let dArr = keyboards.includes(highestPrice) ? sortedDrives : sortedKeyboard

  let aux = 0
  let result = 0

  for (let i = 0; i < dArr.length; i++) {
    if (highestPrice + dArr[i] <= b) {
      aux = dArr[i]
      result = aux + highestPrice
    }
  }

  return result === 0 ? -1 : result
*/

/*
const arr = [...keyboards, ...drives].sort()

  const max = Math.max(...arr)
  let secundary = -1

  for (let i = 0; i < arr.length; i++) {
    if (max + arr[i] < b) {
      secundary = arr[i]
    } else if (i === arr.length - 1) {
      return -1 
    }
  }

  return max + secundary
*/
