function climbingLeaderboard(ranked, player) {
  // Write your code here

  const rank = ranked.filter((unit, index) => ranked.indexOf(unit) === index)
  let position = rank.length + 1
  console.log(rank)
  for (let i = rank.length - 1; i >= 0; i--) {
    for (let j = 0; j < player.length; j++) {
      if (player[j] >= rank[i]) {
        console.log("position: " + position)
        position++
        break
      } else {
        console.log("position: " + position)
        position--
        break
      }
    }
  }
}

climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
