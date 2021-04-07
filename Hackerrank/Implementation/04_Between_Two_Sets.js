//Between Two Sets
//https://www.hackerrank.com/challenges/between-two-sets/problem

function getTotalX(a, b) {
  // Write your code here

  let counter = 1
  let result = 0

  while (counter <= 100) {
    const sideA = a.every((item) => counter % item === 0)
    const sideB = b.every((item) => item % counter === 0)

    if (sideA && sideB) {
      result++
    }

    counter++
  }

  return result
}

getTotalX([2, 4], [16, 32, 96])
