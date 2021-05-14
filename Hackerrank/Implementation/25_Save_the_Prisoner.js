//https://www.hackerrank.com/challenges/save-the-prisoner/problem
//Save the Prisoner!

function saveThePrisoner(n, m, s) {
  // Write your code here

  let count = s
  let warn = []

  for (let i = 1; i <= m; i++) {
    warn.push(count)

    if (count === n) {
      count = 0
    }

    count++
  }

  return warn[warn.length - 1]
}

console.log(saveThePrisoner(4, 6, 2))
