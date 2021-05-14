//https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
//Beautiful Days at the Movies

function beautifulDays(i, j, k) {
  // Write your code here
  let count = 0
  for (let c = i; c <= j; c++) {
    let numToSttring = String(c)
    let ReverseNum = Number(numToSttring.split("").reverse().join(""))

    let diference = Math.abs(c - ReverseNum) / k

    if (diference % 1 === 0) count++
  }

  return count
}

console.log(beautifulDays(20, 23, 6))
