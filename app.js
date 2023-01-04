const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let yourChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  yourChoice = e.target.id
  userChoiceDisplay.innerHTML = yourChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
 
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}
function getResult() {
  if (computerChoice === yourChoice) {
    result = 'its a draw!'
  }
  if (computerChoice === 'rock' &&yourChoice === "paper") {
    result = 'you win!'
  }
  if (computerChoice === 'rock' && yourChoice === "scissors") {
    result = 'you lost888!'
  }
  if (computerChoice === 'paper' && yourChoice === "scissors") {
    result = 'you win!'
  }
  if (computerChoice === 'paper' && yourChoice === "rock") {
    result = 'you lose!'
  }
  if (computerChoice === 'scissors' && yourChoice === "rock") {
    result = 'you win!'
  }
  if (computerChoice === 'scissors' && yourChoice === "paper") {
    result = 'you lose!'
  }
  resultDisplay.innerHTML = result
  elements[0].innerHTML = img
}
