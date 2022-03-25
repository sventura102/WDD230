const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=6d49d5df8d56fd9a810eaf835830927f';
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const currentTemp = document.querySelector('#current-temp');
        const weathericon = document.querySelector('#weathericon');

        document.querySelector('figcaption').textContent = description;

        currentTemp.textContent = jsObject.main.temp.toFixed(0);
        const imgsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`
        const imgalt = jsObject.weather[0].description;

        currentTemp.textContent = jsObject.main.temp.toFixed(0);
        weathericon.setAttribute('src', imgsrc);
        weathericon.setAttribute('alt', imgalt);
    });

    