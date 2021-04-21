//Divisible Sum Pair
//https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

let ar = [1, 2, 3, 4, 5, 6]

function divisibleSumPairs(n, k, ar) {
  const arrMatriz = new Array(n).fill(ar)
  const lengthOfarrMatring = arrMatriz.length

  let index = 0
  let result = 0

  for (let i = 0; i < lengthOfarrMatring; i++) {
    for (let j = 0; j < arrMatriz[i].length; j++) {
      if ((arrMatriz[i][index] + arrMatriz[i][j]) % k === 0 && j > index) {
        result++
      }
    }
    index++
  }
  return result
}

console.log(divisibleSumPairs(6, 5, ar));
