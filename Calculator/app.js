class UI {
  constructor() {
    this.numbersBtn = document.querySelectorAll("[data-number]")
    this.operatorsBtn = document.querySelectorAll("[data-operator]")
    this.result = document.querySelector("[data-result]")
    this.displayTop = document.querySelector(".display__top")
    this.displayBottom = document.querySelector(".display__bottom")
    this.deleteBtn = document.querySelector("[data-delete]")
    this.clearBtn = document.querySelector("[data-clear]")
  }
}
class Calculator {
  constructor(displayTop, displayBottom) {
    this.displayTop = displayTop
    this.displayBottom = displayBottom

    this.clear()
  }

  clear() {
    this.currentvalue = ""
    this.previousvalue = ""
    this.operator = undefined
  }
  addnumber(number) {
    if (this.currentvalue.includes(".") && number === ".") return
    this.currentvalue = this.currentvalue.toString() + number.toString()
  }
  addOperator(operator) {
    if (this.currentvalue === "") return
    if (this.previousvalue !== "") {
      this.compute()
    }
    this.operator = operator
    this.previousvalue = this.currentvalue
    this.currentvalue = ""
  }

  compute() {
    const current = parseFloat(this.currentvalue)
    const prev = parseFloat(this.previousvalue)

    //console.log(prev, current)
    if (isNaN(current) || isNaN(prev)) return
    let compute

    switch (this.operator) {
      case "+":
        compute = prev + current
        break
      case "-":
        compute = prev - current
        break
      case "/":
        compute = prev / current
        break
      case "*":
        compute = prev * current
        break

      default:
        return
    }

    this.currentvalue = compute
    this.previousvalue = ""

    this.operator = undefined
  }

  updatedisplay() {
    this.displayBottom.innerText = this.currentvalue
    this.displayTop.innerText = this.previousvalue
  }
}
const App = () => {
  const ui = new UI()
  const calculator = new Calculator(ui.displayTop, ui.displayBottom)
  function loadAllEventListners() {
    ui.numbersBtn.forEach((number) => {
      number.addEventListener("click", () => {
        calculator.addnumber(number.innerText)
        calculator.updatedisplay()
      })
    })

    ui.operatorsBtn.forEach((operator) => {
      operator.addEventListener("click", () => {
        calculator.addOperator(operator.innerText)
        calculator.updatedisplay()
      })
    })
  }

  return {
    init() {
      loadAllEventListners()
    },
  }
}

const app = App()
app.init()
