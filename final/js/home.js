const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4407066&appid=4e6e434931c6cfa7afaeb300bacaac2a";
const getWeather = async () => {
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);

    document.querySelector('#current-temp').textContent = ((jsObject.main.temp - 273.15) * 1.8 + 32).toFixed(2);
    document.querySelector("#humidity_span").textContent = jsObject.main.humidity;
    const description = jsObject.weather[0].description;
    document.querySelector("#caption").textContent = description;
  };
getWeather();

const requestURL = "https://sammieatkins.github.io/wdd230/final/data.json";

let random_index = Math.floor(Math.random() * 4);

async function getTemples(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const temples = jsObject["temples"];
        console.log(temples);  
        
        
        temples.forEach(temple => {
          displayTemple(temple, random_index)
      });
    };
};
getTemples(requestURL);

function displayTemple(item, index) {
  let div = document.getElementById("spotlight_info")
  let img = document.createElement("img");
  let name = document.createElement("h2");
  let description = document.createElement("p");

  img.setAttribute("src", `images/${item.img}`);
  img.setAttribute("alt", item[index].name);
  name.textContent = item[index].name;
  description.textContent = item[index].history;

  div.appendChild(img);
  div.appendChild(name);
  div.appendChild(description);
}
