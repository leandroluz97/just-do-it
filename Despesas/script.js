const Transactions = () => {
  let transactions = []

  return {
    addTransactions: (transaction) => {
      transactions.push(transaction)

      return transaction
    },
    deleteTransaction: (id) => {
      console.log(id)
      const deleted = transactions.filter((item) => item.id !== id)
      console.log(deleted)
      transactions = deleted
      return transactions
    },
    allTransactions: () => {
      return transactions
    },

    incomeAndExpense: () => {
      const transact = transactions.reduce(
        (acc, val) => {
          if (val.className === "minus") {
            acc.expenses += val.amount
          } else {
            acc.income += val.amount
          }
          return acc
        },
        { income: 0, expenses: 0 }
      )

      return transact
    },
  }
}

const Interface = () => {
  const uiSelectors = {
    form: "form",
    name: "text",
    amount: "amount",
    transactions: "transactions",
    expenses: "money-minus",
    income: "money-plus",
    balance: "balance",
  }

  return {
    selectors: () => uiSelectors,
    inputValues: () => {
      const nameValue = document.querySelector(`#${uiSelectors.name}`).value
      const amountValue = document.querySelector(`#${uiSelectors.amount}`).value

      return {
        nameValue,
        amountValue,
      }
    },
    clearInput: () => {
      document.querySelector(`#${uiSelectors.name}`).value = ""
      document.querySelector(`#${uiSelectors.amount}`).value = ""
    },
    printTransaction: ({ id, name, amount, className }) => {
      const amountEuro = new Intl.NumberFormat("pt-PT", {
        style: "currency",
        currency: "EUR",
      }).format(amount)

      const unorderList = document.querySelector(`#${uiSelectors.transactions}`)

      const li = document.createElement("li")
      li.setAttribute("id", id)
      li.setAttribute("class", className)
      const text = document.createTextNode(name)

      const span = document.createElement("span")
      const textSpan = document.createTextNode(
        `${className === "minus" ? "-" + amountEuro : amountEuro}`
      )
      span.appendChild(textSpan)

      const button = document.createElement("button")
      button.setAttribute("class", "delete-btn")
      const textBtn = document.createTextNode("x")
      button.appendChild(textBtn)

      li.appendChild(text)
      li.appendChild(span)
      li.appendChild(button)

      unorderList.insertBefore(li, unorderList.childNodes[0])
    },
    printExpenses: (expenses) => {
      document.querySelector(
        `#${uiSelectors.expenses}`
      ).innerHTML = new Intl.NumberFormat("pt-PT", {
        style: "currency",
        currency: "EUR",
      }).format(expenses)
    },
    printIncome: (income) => {
      document.querySelector(
        `#${uiSelectors.income}`
      ).innerHTML = new Intl.NumberFormat("pt-PT", {
        style: "currency",
        currency: "EUR",
      }).format(income)
    },
    printTotal: (total) => {
      document.querySelector(
        `#${uiSelectors.balance}`
      ).innerHTML = new Intl.NumberFormat("pt-PT", {
        style: "currency",
        currency: "EUR",
      }).format(total)
    },
    deleteUi: (id) => {
      const li = document.querySelectorAll("ul li")

      li.forEach((item) => {
        if (item.id === id) {
          item.remove()
        }
      })
    },
  }
}

const App = (transactions, interface) => {
  //Functions definitions

  const selectors = interface().selectors()
  const {
    addTransactions,
    allTransactions,
    incomeAndExpense,
    deleteTransaction,
  } = transactions()

  const { form } = selectors

  //LoadEventListeners
  function loadEvents() {
    //Submit Event
    const formSubmit = document.querySelector(`#${form}`)
    formSubmit.addEventListener("submit", handleSubmit)

    const transaction = document.querySelector("ul")
    transaction.addEventListener("click", handleDelete)
  }

  //handle delete
  const handleDelete = (event) => {
    const { printExpenses, printIncome, printTotal } = interface()
    const { deleteUi } = interface()

    const id = event.target.parentElement.id

    deleteTransaction(Number(id))

    const { expenses, income } = incomeAndExpense()
    const total = income - expenses

    printExpenses(expenses)
    printIncome(income)
    printTotal(total)
    deleteUi(id)
  }

  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault()

    const { nameValue, amountValue } = interface().inputValues()
    const {
      clearInput,
      printTransaction,
      printExpenses,
      printIncome,
      printTotal,
    } = interface()

    if (nameValue === "" || amountValue === "") return

    const operator = amountValue.slice(0, 1)
    const amount = Math.abs(Number(amountValue))

    let transaction = {}
    const id = Math.floor(Math.random() * 100000)

    if (operator === "-") {
      transaction = {
        id: id,
        name: nameValue,
        className: "minus",
        amount: amount,
      }
    } else {
      transaction = {
        id: id,
        name: nameValue,
        className: "plus",
        amount: amount,
      }
    }

    const newTransactions = addTransactions(transaction)

    const { expenses, income } = incomeAndExpense()
    const total = income - expenses

    printTransaction(newTransactions)
    printExpenses(expenses)
    printIncome(income)
    printTotal(total)

    clearInput()
  }
  return {
    init() {
      loadEvents()
    },
  }
}
const app = App(Transactions, Interface)

app.init()
