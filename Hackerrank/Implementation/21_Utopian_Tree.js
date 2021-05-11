//https://www.hackerrank.com/challenges/utopian-tree/problem
//Utopian Tree

function utopianTree(n) {
  // Write your code here
  let isSpring = true
  let height = 1

  for (let i = 0; i < n; i++) {
    if (isSpring) {
      height *= 2
    } else {
      height++
    }

    isSpring = !isSpring
  }

  return height
}

console.log(utopianTree(5))
