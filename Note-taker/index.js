//Ui class
class Ui {
  constructor() {
    this.input = document.querySelector("#input")
    this.submit = document.querySelector("#submit")
    this.grid = document.querySelector(".grid")
    this.modal = document.querySelector("#backdrop")
  }

  getInput = () => {
    const text = this.input.value
    return text
  }
  createPost = (data) => {
    this.grid.innerHTML = ""
    data.forEach((note) => {
      this.grid.innerHTML += `<div class="card" id=${note.id}>
            <h2>${note.title}</h2>
            <p>${note.copy}</p>
            <button class="btn btn-primary" id="btn">View</button>
        </div>`
    })
  }
  showNote = (note) => {
    this.modal.classList.add("backdrop--active")
    this.modal.innerHTML = ` <div class="mood">
    <h1>${note.title}</h1>
    <p id="all">${note.copy}</p>
  </div>`
  }

  closeModal = () => {
    this.modal.classList.remove("backdrop--active")
    this.modal.innerHTML = ""
  }
}

//Notes  class
class Notes {
  constructor() {
    this.notes = []
  }

  saveNote = (newInput) => {
    this.notes.push(newInput)
  }
  getNotes = () => {
    return this.notes
  }
}

//note factory new note
class Factory {
  constructor(input) {
    this.copy = input
    this.id = Math.floor(Math.random() * 100)
    this.title = `Note ${this.id}`
  }
}

//App
const App = () => {
  const ui = new Ui()
  const notes = new Notes()

  //All events listeners
  const eventListners = () => {
    //submit new post
    ui.submit.addEventListener("click", (e) => {
      e.preventDefault()

      //get input values
      const inputData = ui.getInput()

      //create new note with input values
      const newData = new Factory(inputData)

      //Save new note
      notes.saveNote(newData)

      //get all notes
      const allNotes = notes.getNotes()

      //print posts
      ui.createPost(allNotes)
    })

    //view / open post in modal
    window.addEventListener("click", (e) => {
      //event delagation
      if (e.target.id === "btn") {
        //get target parent id
        const idNote = e.target.parentElement.id

        //get all notes
        const allNotes = notes.getNotes()

        let single
        allNotes.forEach((note) => {
          //choose the note clicked
          if (note.id == idNote) {
            single = note
          }
        })
        //show/view the chosen note in modal
        ui.showNote(single)
      }

      //close modal
      if (e.target.classList.contains("backdrop--active")) {
        ui.closeModal()
      }
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
