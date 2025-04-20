const nameInput = document.getElementById("name");
const cardNumberInput = document.getElementById("card-number");
const monthNumberInput = document.getElementById("month-number");
const yearNumberInput = document.getElementById("year-number");

const nameDisplay = document.getElementsByClassName("card-front-name")[0];
const numberDisplay = document.getElementsByClassName("card-front-number")[0];
const dateDisplay = document.getElementsByClassName("card-front-date")[0];
const cvcDisplay = document.getElementsByClassName("card-front-cvc")[0];

nameInput.addEventListener("input", (e) => {
    nameDisplay.textContent = e.target.value;
});

cardNumberInput.addEventListener("input", (e) => {
    numberDisplay.textContent = e.target.value;
});

monthNumberInput.addEventListener("input", (e) => {
    dateDisplay.textContent = e.target.value + "/" + dateDisplay.textContent.split('/')[1];
});

yearNumberInput.addEventListener("input", (e) => {
    dateDisplay.textContent = dateDisplay.textContent.split('/')[0] + "/" + e.target.value;
});
