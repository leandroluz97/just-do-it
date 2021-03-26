const obj = [
  { id: 153, name: "leandro", apelido: "luz", idade: 23 },
  { id: 243, name: "leia", apelido: "reis", idade: 24 },
  { id: 343, name: "leidizia", apelido: "luz", idade: 27 },
  { id: 446, name: "leo", apelido: "luz", idade: 26 },
]
var matrixExample = [
  [1, 2, 3, 4],
  [4, 5, 6, 5],
  [7, 8, 9, 7],
  [7, 8, 9, 7],
]
const ar = [5, 4, 5, 6, 5]

const mapit = obj.map((item) => {
  if (item.name === "leo") {
    return { ...item, idade: 16 }
  }
  return item
})
console.log(mapit)

// REDUCE TO OBJECT
const reduceToObject = obj.reduce(
  (acc, val) => {
    return {
      total: acc.total + val.idade,
      tax: (acc.total + val.idade) * 0.2,
    }
  },
  { total: 0, tax: 0 }
)
console.log("reduceToObject", reduceToObject)

//MEDIA
const media = ar.reduce((acc, val, index, arr) => {
  acc = acc + val
  if (index === arr.length - 1) return acc / arr.length

  return acc
})
console.log("Media:", media)

//MAP TO REDUCE
const mapToReduce = ar.reduce((acc, val) => {
  //acc.push(val * 2)
  //return acc
  return [...acc, val * 2]
}, [])
console.log("mapToReduce:", mapToReduce)

//FILTER TO REDUCE
const filterToReduce = ar.reduce((acc, val) => {
  if (val !== 5) {
    return [...acc, val]
  }
  return acc
}, [])
console.log("filterToReduce:", filterToReduce)

//FLAMAP TO REDUCE
const mapFlatToReduce = matrixExample.reduce((acc, val) => {
  return [...acc, ...val]
}, [])
console.log("mapFlatToReduce:", mapFlatToReduce)

//NORMALIZAÇÃO DE DADOS
const normalization = obj.reduce((acc, val) => {
  acc[val.id] = val
  return acc
}, {})
console.log("normalization:", normalization)

//AGRUPAMENTO
const group = obj.reduce(
  (acc, val) => {
    if (val.apelido === "luz") return { ...acc, luz: [...acc.luz, { ...val }] }
    if (val.apelido === "reis")
      return { ...acc, reis: [...acc.reis, { ...val }] }

    return acc
  },

  { luz: [], reis: [] }
)
console.log("group:", group)

async function test() {
  return await 1
}

const tesvar = test()

tesvar.then((data) => console.log(data))
