//https://www.hackerrank.com/challenges/the-hurdle-race/problem

function hurdleRace(k, height) {
  // Write your code here
  let result = 0
  const max = Math.max(...height)

  result = max - k

  return result > 0 ? result : 0
}

console.log(hurdleRace(4, [1, 6, 3, 5, 2]))
