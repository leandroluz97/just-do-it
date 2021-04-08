function breakingRecords(scores) {
  const len = scores.length

  let highestScore = scores[0]
  let lowestScore = scores[0]

  let max = 0
  let min = 0

  for (let i = 1; i < len; i++) {
    if (scores[i] > highestScore) {
      highestScore = scores[i]
      max++
    }
    if (scores[i] < lowestScore) {
      lowestScore = scores[i]
      min++
    }
  }
}

breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])
