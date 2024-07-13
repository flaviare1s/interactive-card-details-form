const numberDisplay = document.querySelector("#card-number");
const nameDisplay = document.querySelector("#cardholder-name");
const monthDisplay = document.querySelector("#month");
const yearDisplay = document.querySelector("#year");
const cvcDisplay = document.querySelector("#card-cvc");

const cardNumber = document.querySelector("#number");
const cardholderName = document.querySelector("#name");
const expMonth = document.querySelector("#exp-month");
const expYear = document.querySelector("#exp-year");
const cvc = document.querySelector("#cvc");

const nameError = document.querySelector("#name-error");
const numberError = document.querySelector("#number-error");
const expDateError = document.querySelector("#exp-date-error");
const cvcError = document.querySelector("#cvc-error");

const confirmBtn = document.querySelector("#confirm-btn");
const continueBtn = document.querySelector("#continue-btn");

const confirmSection = document.querySelector("#confirm-section");
const completedSection = document.querySelector("#completed-section");

function updateCardDetails() {
  numberDisplay.innerText = cardNumber.value || '0000 0000 0000 0000';
  nameDisplay.innerText = cardholderName.value || 'Jane Appleseed';
  monthDisplay.innerText = expMonth.value || '00';
  yearDisplay.innerText = expYear.value || '00';
  cvcDisplay.innerText = cvc.value || '000';
}

cardNumber.addEventListener("input", updateCardDetails);
cardholderName.addEventListener("input", updateCardDetails);
expMonth.addEventListener("input", updateCardDetails);
expYear.addEventListener("input", updateCardDetails);
cvc.addEventListener("input", updateCardDetails);

function validateField(value, regex, errorElement, errorMessage, inputElement) {
  if (value.trim() === "") {
    errorElement.innerText = "Can't be blank";
    inputElement.classList.add("error");
  } else if (!regex.test(value)) {
    errorElement.innerText = errorMessage;
    inputElement.classList.add("error");
  } else {
    errorElement.innerText = "";
    inputElement.classList.remove("error");
  }
}

function validateForm(event) {
  event.preventDefault();

  if (cardholderName.value.trim() === "") {
    nameError.innerText = "Can't be blank";
    cardholderName.classList.add("error");
  } else {
    nameError.innerText = "";
    cardholderName.classList.remove("error");
  }

  const cardNumberValue = cardNumber.value.replace(/\s/g, '');

  const cardNumberRegex = /^(\d{4} \d{4} \d{4} \d{4}|\d{16})$/;
  if (cardNumberValue === "") {
    numberError.innerText = "Can't be blank";
    cardNumber.classList.add("error");
  } else if (!/^(\d\s?)+$/.test(cardNumberValue)) {
    numberError.innerText = "Wrong format, numbers only";
    cardNumber.classList.add("error");
  } else if (!cardNumberRegex.test(cardNumberValue)) {
    numberError.innerText = "Wrong format";
    cardNumber.classList.add("error");
  } else {
    numberError.innerText = "";
    cardNumber.classList.remove("error");
  }

  // Validação para o mês de expiração
  const expMonthValue = expMonth.value.trim();
  if (expMonthValue === "") {
    expDateError.innerText = "Can't be blank";
    expMonth.classList.add("error");
  } else if (!/^\d{2}$/.test(expMonthValue) || parseInt(expMonthValue) < 1 || parseInt(expMonthValue) > 12) {
    expDateError.innerText = "Wrong format";
    expMonth.classList.add("error");
  } else {
    expMonth.classList.remove("error");
    expDateError.innerText = "";
  }

  // Validação para o ano de expiração
  const expYearValue = expYear.value.trim();
  if (expYearValue === "") {
    expDateError.innerText = "Can't be blank";
    expYear.classList.add("error");
  } else if (!/^\d{2}$/.test(expYearValue) || parseInt(expYearValue) < 24) {
    expDateError.innerText = "Wrong format";
    expYear.classList.add("error");
  } else {
    expYear.classList.remove("error");
    expDateError.innerText = "";
  }

  validateField(cvc.value, /^\d{3}$/, cvcError, "Wrong format", cvc);

  if (document.querySelectorAll('.error').length === 0) {
    confirmSection.classList.remove('active');
    confirmSection.classList.add('hidden');
    completedSection.classList.remove('hidden');
    completedSection.classList.add('active');
  }
}

confirmBtn.addEventListener("click", validateForm);

continueBtn.addEventListener("click", () => {
  completedSection.classList.remove('active');
  completedSection.classList.add('hidden');
  confirmSection.classList.remove('hidden');
  confirmSection.classList.add('active');
  document.querySelector('form').reset();
  updateCardDetails();
});
