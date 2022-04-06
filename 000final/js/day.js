const daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const date = new Date();
const today = daynames[date.getDay()];

document.querySelector('#today').textContent = today;

const tomorrow = daynames[date.getDay() +1];
const twoday = daynames[date.getDay() +2];

document.querySelector('#tomorrow').textContent = tomorrow;
document.querySelector('#two-days').textContent = twoday;

