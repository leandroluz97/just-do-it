const missil = () => {
  let timeWithoutLaunch
  let timeWithpeace = 0
  let missilPerSecond = 0
  let started = false
  let timer

  //time withPeace
  function timerPeace() {
    timeWithoutLaunch = setInterval(() => {
      timeWithpeace++

      return timeWithpeace
    }, 1000)
  }

  //start launch
  function startLauncher() {
    if (started) return
    started = true

    clearInterval(timeWithoutLaunch)
    timeWithpeace = 0
    timer = setInterval(() => {
      missilPerSecond++

      return missilPerSecond
    }, 1000)
  }

  //stopLauncher
  let stopLauncher = () => {
    if (!started) return

    timeWithPeace()
    clearInterval(timer)
  }

  return {
    warTime: () => missilPerSecond,
    timerPeace: timerPeace,
    peaceTime: () => timeWithpeace,
    startLauncher: startLauncher,
    stopLauncher: stopLauncher,
  }
}
const bomb = missil()
bomb.timerPeace()
