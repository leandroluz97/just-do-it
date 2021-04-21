//Cats and a Mouse

//https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

function catAndMouse(x, y, z) {
  const catA = Math.abs(z - x)
  const catB = Math.abs(z - y)

  let result = "Mouse C"

  console.log(catA, catB)
  if (catA === catB) {
    return result
  }

  catA < catB ? (result = "Cat A") : (result = "Cat B")

  return result
}

console.log(catAndMouse(2, 4, 5))
