/*declare variables */
const temp = document.querySelector('#current-temp');
const windSpeed = document.querySelector('#windspeed');

/*calculate windchill*/

const windChill = (35.74 + (0.6215 * temp))-(35.75 * Math.pow(windSpeed, 0.16)) + (0.4275*temp*Math.pow(windSpeed, 0.16));

/* add limits */

if (temp <=50 || windSpeed > 3.0) {
const windChill = Math.round(windChill);
document.getElementById("windChill").innerHTML = windChill;
}

else {
    document.getElementById("windChill").innerHTML = "N/A";
}

//* Weather Section */

const apiURL = `https://api.openweathermap.org/data/2.5/weather?id=5506956&units=imperial&appid=6d49d5df8d56fd9a810eaf835830927f`;
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const currentTemp = document.querySelector('#current-temp');
        const weathericon = document.querySelector('#weathericon');

        currentTemp.textContent = jsObject.main.temp.toFixed(0);
        windSpeed.textContent = jsObject.wind.speed;
        const imgsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const imgalt = jsObject.weather[0].description;
        const desc = jsObject.weather[0].description;

        currentTemp.textContent = jsObject.main.temp.toFixed(0);
        weathericon.setAttribute('src', imgsrc);
        weathericon.setAttribute('alt', imgalt);

        document.querySelector('figcaption').textContent = desc;

    });