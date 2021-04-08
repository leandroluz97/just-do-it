function sumOfArr(arr, d) {
  const sum = arr.reduce((acc, val) => acc + val)

  return sum === d ? true : false
}

function birthday(s, d, m) {
  const len = s.length

  let arr = []
  let sum = false

  let result = 0

  for (let i = 0; i < len; i++) {
    let copyOfs = [...s]

    arr = copyOfs.splice(i, m)
    sum = sumOfArr(arr, d)

    if (sum) {
      result++
      sum = false
    }
  }

  return result
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2))
