const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4407066&appid=4e6e434931c6cfa7afaeb300bacaac2a";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);

    document.querySelector('#current-temp').textContent = ((jsObject.main.temp - 273.15) * 1.8 + 32).toFixed(2);
    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
  };
getWeather();
