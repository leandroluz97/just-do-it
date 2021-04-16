//Drawing Book
//https://www.hackerrank.com/challenges/drawing-book/problem

function pageCount(n, p) {
  const totalTurnFromleft = Math.floor(n / 2)
  const totalTurnFromLeftToPAge = Math.floor(p / 2)
  const totalTurnFromRightToPAge = totalTurnFromleft - totalTurnFromLeftToPAge

  return Math.min(totalTurnFromLeftToPAge, totalTurnFromRightToPAge)
}

console.log(pageCount(3, 1))
/*
  let inside = []
  let arr = []

  if (n === p) return 0

  for (let i = 0; i <= n; i++) {
    inside.push(i)
    if (inside.length === 2) {
      arr.push(inside)
      inside = []
    } else if (i === n) {
      arr.push(inside)
    }
  }

  console.log(arr)
  let aux = []
  let start = 0
  let end = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(p) || arr[arr.length - 1 - i].includes(p)) {
      aux.push(start, end)
      break
    }

    start++
    end++
  }

  return Math.min(...aux)
  */
