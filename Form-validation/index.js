class UI {
  constructor() {
    this.form = document.querySelector("#form")
    this.name = document.querySelector("#name")
    this.email = document.querySelector("#email")
    this.phone = document.querySelector("#tel")
    this.password = document.querySelector("#password")
    this.error = document.querySelector(".error")
    this.nameError = document.querySelector(".name__error")
    this.emailError = document.querySelector(".email__error")
    this.phoneError = document.querySelector(".tel__error")
    this.passwordError = document.querySelector(".password__error")
  }

  getAllInputData() {
    return {
      name: this.name.value,
      email: this.email.value,
      phone: this.phone.value,
      password: this.password.value,
      nameError: this.nameError.value,
      emailError: this.emailError.value,
      phoneError: this.phoneError.value,
      passwordError: this.passwordError.value,
    }
  }
}

class Validations {
  constructor() {
    this.validation = true
  }

  //Email validation
  nameValidation(name, nameError) {
    if (name === "" || name.length < 3 || name === "undefined") {
      //Show  error error message
      this.showErrorMessage(
        nameError,
        '"Please entre a valid name eg.: Leandro Luz"'
      )
      this.validation = false && this.validation
    } else {
      //clear error message
      this.showErrorMessage(nameError)
    }
  }

  //Email validation
  emailValidation(email, emailError) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      this.showErrorMessage(
        emailError,
        "Please entre a valid email eg.: leandro@gmail.com"
      )
      this.validation = false && this.validation
    } else {
      //clear error message
      this.showErrorMessage(emailError)
    }
  }

  //Phone validation
  phoneValidation(phone, phoneError) {
    if (!/^(\d{3})(\d{3})(\d{3})$/i.test(Number(phone))) {
      //Show  error error message
      this.showErrorMessage(
        phoneError,
        "Please entre a valid name eg.: 999888555"
      )
      this.validation = false && this.validation
    } else {
      //clear error message
      this.showErrorMessage(phoneError)
    }
  }

  passwordValidation(password, passwordError) {
    //Email validation
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(password)) {
      //Show  error error message
      this.showErrorMessage(
        passwordError,
        "Your password must have mnimum eight characters, at least one letter and one number"
      )
      this.validation = false && this.validation
    } else {
      //clear error message
      this.showErrorMessage(passwordError)
    }
  }
  showErrorMessage(display, message) {
    if (message) {
      display.innerHTML = message
    } else {
      display.innerHTML = ""
    }
  }

  valid() {
    return this.validation
  }
}
function App() {
  const ui = new UI()
  const validations = new Validations()
  const loadEventListeners = () => {
    //Event listners
    ui.form.addEventListener("submit", (e) => {
      //prevent  form default
      e.preventDefault()

      //input data values
      const value = ui.getAllInputData()

      //validations
      validations.nameValidation(value.name, ui.nameError)
      validations.emailValidation(value.email, ui.emailError)
      validations.phoneValidation(value.phone, ui.phoneError)
      validations.passwordValidation(value.password, ui.passwordError)

      //all validations
      const valid = validations.valid()

      //Check validation if true send it to server
      if (valid) {
        //Submit to server
        console.log("Form data submitted to server")

        //clear input values
        ui.name.value = ""
        ui.email.value = ""
        ui.phone.value = ""
        ui.password.value = ""
      } else {
        console.log("Error form not submitted!")
      }

      return valid
    })
  }

  return {
    init() {
      loadEventListeners()
    },
  }
}

const app = App()
app.init()
