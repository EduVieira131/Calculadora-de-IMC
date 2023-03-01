import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { validateData } from './utils.js'
import { calculateIMC } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = handleSubmit
form.oninput = AlertError.close

function handleSubmit(event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = validateData(weight) || validateData(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `O seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}