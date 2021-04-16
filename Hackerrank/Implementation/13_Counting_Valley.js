function countingValleys(steps, path) {
  const pathArr = path.split("")

  let isValley = false
  let count = 0
  let seaLevel = 0
  let currentLevel = seaLevel

  for (let i = 0; i < steps; i++) {
    pathArr[i] === "U" ? currentLevel++ : currentLevel--

    if (currentLevel < seaLevel && !isValley) {
      count++
      isValley = true
    } else if (currentLevel >= seaLevel) {
      isValley = false
    }
  }

  return count
}

console.log(countingValleys("DUDDDUUDUU".length, "DUDDDUUDUU"))
