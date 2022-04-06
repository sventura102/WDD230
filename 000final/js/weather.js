//* Weather Section*//

const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=3600949&units=imperial&appid=6d49d5df8d56fd9a810eaf835830927f`;
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        //* grab text from html to input information *//
        const currentTemp = document.querySelector('#current-temp');
        const onedayTemp = document.querySelector('#oneday-temp');
        const twodayTemp = document.querySelector('#twoday-temp')
        const weathericon = document.querySelector('#weathericon');
        const weathericon1 = document.querySelector('#weathericon1');
        const weathericon2 = document.querySelector('#weathericon2');

        //*get information from weather json*//
        currentTemp.textContent = jsObject.list[0].main.temp.toFixed(0);
        onedayTemp.textContent = jsObject.list[1].main.temp.toFixed(0);
        twodayTemp.textContent = jsObject.list[2].main.temp.toFixed(0);

        //*get images src and description from json*//
        const imgsrc = `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`;
        const imgalt = jsObject.list[0].weather[0].description;
        const desc = jsObject.list[0].weather[0].description;
        const humid = jsObject.list[0].main.humidity.toFixed(0);
        const imgsrc1 = `https://openweathermap.org/img/w/${jsObject.list[1].weather[0].icon}.png`;
        const imgalt1 = jsObject.list[1].weather[0].description;
        const desc1 = jsObject.list[1].weather[0].description;
        const humid1 = jsObject.list[1].main.humidity.toFixed(0);
        const imgsrc2 = `https://openweathermap.org/img/w/${jsObject.list[2].weather[0].icon}.png`
        const imgalt2 = jsObject.list[2].weather[0].description;
        const desc2 = jsObject.list[2].weather[0].description;
        const humid2 = jsObject.list[2].main.humidity.toFixed(0);

        currentTemp.textContent = jsObject.list[0].main.temp.toFixed(0);
        weathericon.setAttribute('src', imgsrc);
        weathericon.setAttribute('alt', imgalt);
        document.querySelector('#desc').textContent = desc;
        document.querySelector('#humidity').textContent = humid;

        onedayTemp.textContent = jsObject.list[1].main.temp.toFixed(0);
        weathericon1.setAttribute('src', imgsrc1);
        weathericon1.setAttribute('alt', imgalt1);
        document.querySelector('#desc1').textContent = desc1;
        document.querySelector('#humidity1').textContent = humid1;

        twodayTemp.textContent = jsObject.list[2].main.temp.toFixed(0);
        weathericon2.setAttribute('src', imgsrc2);
        weathericon2.setAttribute('alt', imgalt2);
        document.querySelector('#desc2').textContent = desc2;
        document.querySelector('#humidity2').textContent = humid2;
    })