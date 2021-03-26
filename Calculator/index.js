/*CODE ADAPTED FROM WEBDEVSIMPLIFIED FOR STUDY PURPOSE  */

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
    this.currentOperand = ""
    this.previousOperand = ""
    this.operation = undefined
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }
  appendNumber(number) {
    //prevent adding more than one dot to de number
    if (number === "." && this.currentOperand.includes(".")) return

    // same as this.currentOperand += this.numbers
    //concatinating the display numbers
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }
  chooseOperation(operation) {
    if (this.currentOperand === "") return

    //if current  and previous display is not empty compute result
    if (this.previousOperand !== "") {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ""
  }

  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)

    //check if displays are not empty
    if (isNaN(prev) || isNaN(current)) return

    switch (this.operation) {
      case "+":
        computation = prev + current
        break
      case "-":
        computation = prev - current
        break
      case "*":
        computation = prev * current
        break
      case "/":
        computation = prev / current
        break

      default:
        return
    }

    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ""
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split(".")[0])
    const decimalDigits = stringNumber.split(".")[1]

    let intergerDisplay
    console.log(isNaN("integerDigits"))
    if (isNaN(integerDigits)) {
      intergerDisplay = ""
    } else {
      intergerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      })
      console.log(intergerDisplay)
    }

    if (decimalDigits != null) {
      return `${intergerDisplay}.${decimalDigits}`
    } else {
      return intergerDisplay
    }
  }
  updateDisplay() {
    this.displayBottom.innerText = this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.displayTop.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`
    } else {
      this.displayTop.innerText = ""
    }
  }
}

const App = () => {
  const ui = new UI()
  const calculator = new Calculator(ui.displayTop, ui.displayBottom)

  const eventListeners = () => {
    //EventListeners
    ui.numbersBtn.forEach((button) => {
      button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
      })
    })

    ui.operatorsBtn.forEach((operator) => {
      operator.addEventListener("click", () => {
        calculator.chooseOperation(operator.innerText)
        calculator.updateDisplay()
      })
    })

    ui.result.addEventListener("click", (button) => {
      calculator.compute()
      calculator.updateDisplay()
    })

    ui.clearBtn.addEventListener("click", (button) => {
      calculator.clear()
      calculator.updateDisplay()
    })
    ui.deleteBtn.addEventListener("click", (button) => {
      calculator.delete()
      calculator.updateDisplay()
    })
  }

  return {
    init() {
      eventListeners()
    },
  }
}

const app = App()
app.init()
