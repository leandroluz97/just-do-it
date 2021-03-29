const questions = [
  {
    id: 1,
    question: "What are number I in roman",
    answer: 1,
    options: [3, 1, 2],
  },
  {
    id: 2,
    question: "What are number V in roman",
    answer: 5,
    options: [30, 75, 5],
  },
  {
    id: 3,
    question: "What are number X in roman",
    answer: 10,
    options: [10, 20, 110],
  },
]

class UI {
  constructor() {
    this.form = document.querySelector("#form")
  }
  populateUI(quiz) {
    this.form.innerHTML = ""
    this.form.innerHTML = ` <h2 data-question>${quiz.question}</h2>
      `
    quiz.options.forEach((option, index) => {
      this.form.innerHTML += `
          <div id="${quiz.id}">
          <p>${option}</p>
          <button  class="btn">Select answer</button>
          <input type="hidden" name="" value="${option}" />
        </div>`
    })
  }

  gameOver(points) {
    this.form.innerHTML = ""
    this.form.innerHTML = `<p>total points: ${points}</p> <button class="over">Start Over</  button>`
  }
}

class Question {
  constructor() {
    this.position = 0
    this.points = 0
  }

  checkQuestion(id, answer) {
    questions.forEach((question) => {
      if (question.id === id) {
        if (question.answer === answer) {
          this.points += 1
          this.NextQuestion()
        } else {
          this.NextQuestion()
        }
      }
    })
  }

  NextQuestion() {
    //go to the next question
    this.position += 1
  }
}

function App() {
  const ui = new UI()
  const question = new Question()

  const eventListners = () => {
    //Populate questionn on load
    document.addEventListener("DOMContentLoaded", () => {
      ui.populateUI(questions[question.position])
    })

    //Chose response
    document.addEventListener("click", (e) => {
      //chosen answer
      const btnCliked = e.target.classList.contains("btn")

      //if the clicked element isn't a button do nothing
      if (!btnCliked) return

      //question id
      const id = Number(e.target.parentElement.id)

      // answer question chosen
      const awnser = Number(e.target.nextElementSibling.value)

      //check if it is a valid question
      question.checkQuestion(id, awnser)

      //check if we got questions left to respond other wise game over
      if (question.position <= 2) {
        //Populate new question
        ui.populateUI(questions[question.position])
      } else {
        //game over and show total points
        ui.gameOver(question.points)
      }
    })

    //Start Over
    document.addEventListener("click", (e) => {
      //refresh page
      if (e.target.classList.contains("over")) location.reload()
    })
  }

  return {
    init() {
      eventListners()
    },
  }
}

const app = App()

app.init()
