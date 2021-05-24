//https://www.hackerrank.com/challenges/permutation-equation/problem

function permutationEquation(p) {
  // Write your code here

  const result = []
  for (let i = 1; i < p.length + 1; i++) {
    result.push(p.indexOf(p.indexOf(i) + 1) + 1)
  }

  return result
}

console.log(permutationEquation([5, 2, 1, 3, 4]))
