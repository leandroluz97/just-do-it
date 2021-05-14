//https://www.hackerrank.com/challenges/strange-advertising/problem
//Viral advertising

function viralAdvertising(n) {
  // Write your code here

  let shared = 5
  let liked = 0
  let accomulative = 0

  for (let i = 1; i <= n; i++) {
    liked = Math.floor(shared / 2)

    accomulative += liked

    shared = liked * 3
  }

  return accomulative
}

console.log(viralAdvertising(5))
