// monday and tuesday banner

const currentDate = new Date();
const currentDay = currentDate.getDay();

let banner = document.querySelector("#banner")

if(currentDay === 1 || currentDay === 2) {
 banner.classList.toggle("show");
}

else {banner.remove();}