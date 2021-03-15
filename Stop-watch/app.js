//Ui selectors
class UI {
  constructor() {
    this.display = document.querySelector("#counter")
    this.hours = document.querySelector("#hours")
    this.minutes = document.querySelector("#minutes")
    this.seconds = document.querySelector("#seconds")

    this.start = document.querySelector("#start")
    this.stop = document.querySelector("#stop")
    this.lap = document.querySelector("#lap")
    this.restart = document.querySelector("#restart")
    this.lapDisplay = document.querySelector("#lapped")
  }
}

//StopWatch
class StopWatch {
  constructor(display, hours, minutes, seconds, lapDisplay) {
    this.display = display
    this.hours = hours
    this.minutes = minutes
    this.seconds = seconds
    this.hoursValue = 0
    this.minutesValue = 0
    this.secondsValue = this.time
    this.counter = null
    this.time = 0
    this.flag = false
    this.lapSnap = []
    this.lapDisplay = lapDisplay
  }

  start() {
    //if the counter isn't pass other wise don't start again
    if (this.flag) return
    this.flag = true

    //set the timer
    this.counter = setInterval(() => {
      this.time++
      this.secondsValue = this.time % 60
      this.minutesValue = Math.floor(this.time / 60)
      this.hoursValue = Math.floor(this.minutesValue / 60)

      //update the display watch
      this.updatedDisplay()
    }, 1000)
  }

  stop() {
    //stop the counter
    this.counter = clearInterval(this.counter)
    this.flag = false
  }

  lap() {
    //take the snapshot of the watch
    const lapped = `${String(this.hoursValue).padStart(2, "0")}:${String(
      this.minutesValue
    ).padStart(2, "0")}:${String(this.secondsValue).padStart(2, "0")}`
    this.lapSnap.push(lapped)

    //print the snapArray on screen
    this.lapDisplay.innerHTML = ""
    this.lapSnap.forEach((lap) => {
      this.lapDisplay.innerHTML += `<p>${lap}</p>`
    })
  }

  restart() {
    //restart the watch
    this.stop()
    this.time = 0
    this.hoursValue = 0
    this.minutesValue = 0
    this.secondsValue = 0
    this.updatedDisplay()
  }

  updatedDisplay() {
    //display the hour:minutes:seconds in formart of 00:00:00
    this.hours.innerHTML = String(this.hoursValue).padStart(2, "0")
    this.minutes.innerHTML = String(this.minutesValue).padStart(2, "0")
    this.seconds.innerHTML = String(this.secondsValue).padStart(2, "0")
  }
}

const App = () => {
  //all eventlisteners
  function loadEventListeners() {
    //instanciate classes
    const ui = new UI()
    const stopWatch = new StopWatch(
      ui.display,
      ui.hours,
      ui.minutes,
      ui.seconds,
      ui.lapDisplay
    )

    //onload display initial state of watch
    document.addEventListener("DOMContentLoaded", () => {
      const initialState = 0
      ui.hours.innerHTML = String(initialState).padStart(2, "0")
      ui.minutes.innerHTML = String(initialState).padStart(2, "0")
      ui.seconds.innerHTML = String(initialState).padStart(2, "0")
    })
    ui.start.addEventListener("click", (e) => {
      stopWatch.start()
    })
    ui.stop.addEventListener("click", (e) => {
      stopWatch.stop()
    })
    ui.lap.addEventListener("click", (e) => {
      stopWatch.lap()
    })
    ui.restart.addEventListener("click", (e) => {
      stopWatch.restart()
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
