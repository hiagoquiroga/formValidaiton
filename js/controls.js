import { 
  username,
  email,
  password,
  passwordTwo } from "./elements.js";


 function checkInputs() {
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const passwordTwoValue = passwordTwo.value.trim()

  if(usernameValue === '') {
    errorValidation(username, 'Fill this field')
  } else {
    successValidation(username)
  }

  if(emailValue === '') {
    errorValidation(email, 'Fill this field')
  } else {
    successValidation(email)
  }

  if (passwordValue === '') {
    errorValidation(password, 'Fill this field')
  } else if (passwordValue.length < 8) {
    errorValidation(password, 'Password must be at least 8 characters long')
  }
  else {
    successValidation(password)
  }

  if (passwordTwoValue === '') {
    errorValidation(passwordTwo, 'Fill this field')
  } else if (passwordTwoValue !== passwordValue) {
    errorValidation(passwordTwo, 'Passwords do not match')
  } else {
    successValidation(passwordTwo)
    }
 }    

function errorValidation(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')

    small.innerText = message

  formControl.className = 'form-control error'
}

function successValidation(input) {
    const formControl = input.parentElement

    formControl.className = 'form-control success'
}

export {
    checkInputs
}