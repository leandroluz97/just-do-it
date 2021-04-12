//Day of the Programmer
//https://www.hackerrank.com/challenges/day-of-the-programmer/problem

function dayOfProgrammer(year) {
  let text = ""
  let day = 12

  if (year === 1918) return (text = `${day + 14}.09.${year}`)

  if (year >= 1700 && year <= 1917) {
    if (year % 4 === 0) {
      console.log("yess")
      text = `${day}.09.${year}`
      return text
    } else {
      day = 13
      text = `${day}.09.${year}`
      return text
    }
  }

  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    text = `${day}.09.${year}`
  } else {
    day = 13
    text = `${day}.09.${year}`
  }

  return text
}

console.log(dayOfProgrammer(2100))

/*
 let text = ""
  let day = 12

  if(year===1918) return text = `${day+14}.09.${year}`

   if (year >= 1700 && year <= 1917) {
    if (year % 4 === 0) {
        console.log('yess');
      text = `${day}.09.${year}`
      return text
    } else {
      day = 13
      text = `${day}.09.${year}`
      return text
    }
  }

  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
   
    text = `${day}.09.${year}`
  } else {
    day = 13
    text = `${day}.09.${year}`
  }

  return text

*/
