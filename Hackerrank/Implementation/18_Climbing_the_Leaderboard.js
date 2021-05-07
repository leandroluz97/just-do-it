function climbingLeaderboard(ranked, player) {
  // Write your code here

  const rank = ranked.filter((unit, index) => ranked.indexOf(unit) === index)
  let ranking = rank.length + 1
  let arr = []
  let index = -1

  for (let i = rank.length - 1; i >= 0; i--) {
    for (let j = 0; j < player.length; j++) {
      console.log(rank[i], player[j])
    }
  }
  console.log(arr)
}

climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
