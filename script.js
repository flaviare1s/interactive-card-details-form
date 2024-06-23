const number = document.querySelector('#card-number')
const name = document.querySelector('#cardholder-name')
const month = document.querySelector('#month')
const year = document.querySelector('#year')
const cardNumber = document.querySelector('#number')
const cardholderName = document.querySelector('#name')
const expMonth = document.querySelector('#exp-month')
const expYear = document.querySelector('#exp-year')
const cvc = document.querySelector('#cvc')

const numberError = document.querySelector('#number-error')
const expDateError = document.querySelector('#exp-date-error')
const cvcError = document.querySelector('#cvc-error')

const confirmBtn = document.querySelector('#confirm-btn')
const continueBtn = document.querySelector('#continue-btn')

const confirmSection = document.querySelector('#confirm-section')
const completedSection = document.querySelector('#completed-section')

cardNumber.addEventListener('input', () => {
  number.innerText = cardNumber.value
})

cardholderName.addEventListener('input', () => {
  name.innerText = cardholderName.value
})

expMonth.addEventListener('input', () => {
  month.innerText = expMonth.value
})

expYear.addEventListener('input', () => {
  year.innerText = expYear.value
})

function validateForm(event) {
  event.preventDefault()
  
}

confirmBtn.addEventListener('click', validateForm)
// continueBtn.addEventListener('click', backToForm)
