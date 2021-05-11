//https://www.hackerrank.com/challenges/angry-professor/problem
//Agry teacher

function angryProfessor(k, a) {
  // Write your code here
  let count = 0

  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) count++
  }

  return count <= k ? "YES" : "NO"
}

console.log(angryProfessor(3, [-2, -1, 0, 1, 2]))
