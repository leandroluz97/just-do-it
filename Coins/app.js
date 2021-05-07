const Ui = () => {
  const selectors = {
    form: "form",
    input: "input",
    output: "output",
    inputSelect: "inputcurrency",
    outputSelect: "outputcurrency",
    switcher: "switcher",
    submit: "convert",
    result: "result",
  }

  return {
    allSelectors: function () {
      return selectors
    },
    inputValues: function () {
      const inputSelect = document.querySelector(`#${selectors.inputSelect}`)
        .value
      const input = document.querySelector(`#${selectors.input}`).value

      const outputSelect = document.querySelector(`#${selectors.outputSelect}`)
        .value
      const output = document.querySelector(`#${selectors.output}`).value

      const switcher = document.querySelector(`#${selectors.switcher}`).value

      return {
        inputSelect,
        input,
        outputSelect,
        output,
        switcher,
      }
    },
    switchValues: function () {
      const inputSelect = document.querySelector(`#${selectors.inputSelect}`)
        .value
      const input = document.querySelector(`#${selectors.input}`).value

      const outputSelect = document.querySelector(`#${selectors.outputSelect}`)
        .value
      const output = document.querySelector(`#${selectors.output}`).value

      const inputSelectSave = inputSelect
      const inputSave = input

      document.querySelector(`#${selectors.inputSelect}`).value = outputSelect
      document.querySelector(`#${selectors.input}`).value = output

      document.querySelector(
        `#${selectors.outputSelect}`
      ).value = inputSelectSave
      document.querySelector(`#${selectors.output}`).value = inputSave
    },

    result: function (result) {
      const resultView = (document.querySelector(
        `#${selectors.output}`
      ).value = result)
    },
  }
}

const Conversor = () => {
  return {
    convert: function (input, inputSelect, outputSelect) {
      if (input === "" || input < 0) return

      const currencies = {
        ecv: 0.91,
        real: 5.41,
        euro: 0.82,
        libra: 0.75,
        dollar: 1,
      }

      total =
        (currencies[outputSelect] * Number(input)) / currencies[inputSelect]

      return total.toFixed(2)
    },
  }
}

const App = (Ui, Conversor) => {
  const ui = Ui()
  const selectors = ui.allSelectors()
  const converter = Conversor()

  function handleEvents() {
    const submit = document.querySelector(`#${selectors.submit}`)
    submit.addEventListener("click", handleConvertCurrency)

    const switcher = document.querySelector(`#${selectors.switcher}`)
    switcher.addEventListener("change", handleSwitcher)
  }

  const handleConvertCurrency = (e) => {
    e.preventDefault()

    const input = ui.inputValues().input
    const inputSelect = ui.inputValues().inputSelect
    const outputSelect = ui.inputValues().outputSelect

    const total = converter.convert(input, inputSelect, outputSelect)

    const result = ui.result(total)
  }

  const handleSwitcher = (e) => {
    ui.switchValues()
  }
  return {
    init() {
      handleEvents()
    },
  }
}

const app = App(Ui, Conversor)
app.init()
