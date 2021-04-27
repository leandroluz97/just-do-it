const Ui = () => {
  const selectors = {
    form: "form",
    input: "input",
    output: "output",
    inputSelect: "inputcurrency",
    outputcurrency: "outputcurrency",
    switcher: "switcher",
    submit: "convert",
    result: "result",
  }

  return {
    allSelectors: function () {
      return selectors
    },
    inputValues: function () {
      const local = document.querySelector(`#${selectors.inputSelect}`).value
      const desired = document.querySelector(`#${selectors.outputcurrency}`)
        .value
      const switcher = document.querySelector(`#${selectors.switcher}`).value
      const input = document.querySelector(`#${selectors.input}`).value
      const output = document.querySelector(`#${selectors.output}`).value

      return {
        local,
        desired,
        switcher,
        input,
        output,
      }
    },
  }
}

const App = (Ui) => {
  const ui = Ui()
  const selectors = ui.allSelectors()
  function handleEvents() {
    const submit = document.querySelector(`#${selectors.submit}`)
    submit.addEventListener("click", handleConvertCurrency)
  }

  const handleConvertCurrency = (e) => {
    e.preventDefault()
    console.log(ui.inputValues().desired)
  }
  return {
    init() {
      handleEvents()
    },
  }
}

const app = App(Ui)
app.init()
