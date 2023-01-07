const isValidName = (name) => {
  const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
  return regex.test(String(name).toLowerCase())
}

const isValidEmail = (email) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(String(email).toLowerCase())
}

const isValidCPF = (cpf) => {
  const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
  return regex.test(String(cpf).toLowerCase())
}

const form = document.querySelector('form')
const message = document.querySelector('.thanks')
const inputName = document.querySelector('input[name="name"]')
const inputEmail = document.querySelector('input[name="email"]')
const inputCPF = document.querySelector('input[name="cpf"]')

let isValidForm = false

const resetInput = (element) => {
  element.classList.remove('invalid')
  element.nextElementSibling.classList.add('error-hidden')
}

const invalidateElem = (element) => {
  element.classList.add('invalid')
  element.nextElementSibling.classList.remove('error-hidden')
  isValidForm = false
}

const showErrorMessage = (messageElement) => {
  messageElement.classList.add("error")
  messageElement.classList.remove("error-hidden")
}

const validateInput = () => {
  isValidForm = true
  const errorName = document.querySelector('.error-name')

  if (inputName.value === "") {
    errorName.innerHTML = "Preencha o campo."
    showErrorMessage(errorName)
    invalidateElem(inputName)
  } else if (!isValidName(inputName.value)) {
    errorName.innerHTML = "Coloque um nome válido."
    showErrorMessage(errorName)
    invalidateElem(inputName)
  }

  if (!isValidEmail(inputEmail.value)) {
    invalidateElem(inputEmail)
  }

  if (!isValidCPF(inputCPF.value)) {
    invalidateElem(inputCPF)
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  validateInput()

  // POST - Backend
  if (isValidForm) {
    form.remove()
    message.classList.remove('hidden')
    console.log('Validou e enviou')
  }
})

inputName.addEventListener("input", () => {
  resetInput(inputName)
})

inputEmail.addEventListener("input", () => {
  resetInput(inputEmail)
})

inputCPF.addEventListener("input", () => {
  resetInput(inputCPF)
})