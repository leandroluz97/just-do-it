//Bill Division
//https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(bill, k, b) {
  let result
  const sum = bill.reduce((acc, val) => {
    return acc + val
  })

  const priceItemsAtebyAna = (sum - bill[k]) / 2

  if (priceItemAtebyAna === b) {
    result = "Bon Appetit"
  } else {
    result = b - priceItemAtebyAna
  }
  return result
}
console.log(bonAppetit([3, 10, 2, 9], 1, 12))
