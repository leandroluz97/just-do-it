function sockMerchant(ar) {
  const array = [...ar].sort()
  let counter = 0
  let aux = []

  for (let i = 0; i < array.length; i++) {
    aux.push(array[i])
    if (aux.length === 2) {
      if (aux[0] === aux[1]) {
        counter++
        aux = []
      } else {
        aux.shift()
      }
    }
  }

  return counter
}
sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])
//[4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5]
