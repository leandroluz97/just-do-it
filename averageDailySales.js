let arr = [
  {
    orderId: 554,
    creationDate: "2017-03-25T10:35:20", // Saturday
    orderLines: [
      { productId: 9872, name: "Pencil", quantity: 3, unitPrice: 3.0 },
    ],
  },
  {
    orderId: 555,
    creationDate: "2017-03-25T11:24:20", // Saturday
    orderLines: [
      { productId: 9872, name: "Pencil", quantity: 1, unitPrice: 3.0 },
      { productId: 1746, name: "Eraser", quantity: 1, unitPrice: 1.0 },
    ],
  },
  {
    orderId: 453,
    creationDate: "2017-03-27T14:53:12", // Monday
    orderLines: [
      { productId: 5723, name: "Pen", quantity: 4, unitPrice: 4.22 },
      { productId: 9872, name: "Pencil", quantity: 3, unitPrice: 3.12 },
      { productId: 3433, name: "Erasers Set", quantity: 1, unitPrice: 6.15 },
    ],
  },
  {
    orderId: 431,
    creationDate: "2017-03-20T12:15:02", // Monday
    orderLines: [
      { productId: 5723, name: "Pen", quantity: 7, unitPrice: 4.22 },
      { productId: 3433, name: "Erasers Set", quantity: 2, unitPrice: 6.15 },
    ],
  },
  {
    orderId: 690,
    creationDate: "2017-03-26T11:14:00", // Sunday
    orderLines: [
      { productId: 9872, name: "Pencil", quantity: 4, unitPrice: 3.12 },
      { productId: 4098, name: "Marker", quantity: 5, unitPrice: 4.5 },
    ],
  },
]

function averageDailySales(arr) {
  weekdays = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ]

  const dailySales = weekdays.reduce((acc, value) => {
    acc[value] = []
    return acc
  }, {})

  for (let i = 0; i < arr.length; i++) {
    let data = new Date(arr[i].creationDate).getDay()

    for (let j = 0; j < arr[i].orderLines.length; j++) {
      dailySales[weekdays[data]].push(arr[i].orderLines[j].quantity)
    }
  }

  for (const key in dailySales) {
    dailySales[key] =
      dailySales[key].length > 0
        ? dailySales[key].reduce((acc, value, index, ar) => {
            acc = acc + value
            if (index === ar.length - 1) {
              acc =
                (acc / ar.length) % 1 > 0.5
                  ? Math.ceil(acc / ar.length)
                  : Math.floor(acc / ar.length)
              console.log(acc)
              return acc
            }

            return acc
          })
        : 0
  }
  console.log(dailySales)

  return
}

console.log(averageDailySales(arr))

console.log(1 % 1)
