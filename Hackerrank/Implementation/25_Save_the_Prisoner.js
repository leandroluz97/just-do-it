//https://www.hackerrank.com/challenges/save-the-prisoner/problem
//Save the Prisoner!

function saveThePrisoner(n, m, s) {
  // Write your code here

  return (m - 1 + s) % n || n
}

console.log(saveThePrisoner(4, 6, 2))
