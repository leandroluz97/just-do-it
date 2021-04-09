//Migratory Birds
//https://www.hackerrank.com/challenges/migratory-birds/problem

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
  let sortedArr = arr.sort()
  let aux = 0

  let max = 0
  let counter = 1

  for (let i = 0; i < sortedArr.length; i++) {
    counter = sortedArr[i] === sortedArr[i - 1] ? counter + 1 : 0

    if (counter > max) {
      aux = sortedArr[i]
      max = counter
    }
  }

  return aux
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))

/*
let result = []

  let objArr = arr
    .filter((item, index) => arr.indexOf(item) === index)
    .reduce((acc, val) => {
      acc[val] = 0
      return acc
    }, {})

  for (let i = 0; i < arr.length; i++) {
    objArr = { ...objArr, [arr[i]]: objArr[arr[i]] + 1 }
  }

  const max = Math.max(...Object.values(objArr))

  for (const key in objArr) {
    if (objArr[key] === max) {
      result.push(key)
    }
  }

  return Math.min(...result)

*/
