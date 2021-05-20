function circularArrayRotation(a, k, queries) {
  // Write your code here
  /*
  for (let i = 0; i < k; i++) {
    a.unshift(a.pop())
  }
  */

  //create arr of length X
  let arr = Array(a.length)
  let result = []

  for (let i = 0; i < a.length; i++) {
    //arr index of (i + k) % a.length stores
    // (i + k) % a.length = (number of rotation(k) + iteration(i)) % a.length
    arr[(i + k) % a.length] = a[i]
  }

  //store the requested indexes in a new array
  for (let j = 0; j < queries.length; j++) {
    result.push(arr[queries[j]])
  }

  return result
}

console.log(circularArrayRotation([1, 2, 3], 2, [0, 1, 2]))
