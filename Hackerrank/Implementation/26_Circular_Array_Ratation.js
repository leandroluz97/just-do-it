function circularArrayRotation(a, k, queries) {
  // Write your code here

  for (let i = 0; i < k; i++) {
    a.unshift(a.pop())
  }

  for (let j = 0; j < queries.length; j++) {
    console.log(a[queries[j]])
  }
}

console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2]))
//2 3 1
