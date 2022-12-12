let random_index = Math.floor(Math.random() * 4);

// make sure temple doesn't show up twice
function randomItem(not) {
  let random_index = Math.floor(Math.random() * 4);
  if (random_index === not) {
      console.log("Repeated");
      return randomItem(not);
  }
  return random_index;
}
randomItem(random_index);


// WEATHER
const stlApiURL = "https://api.openweathermap.org/data/2.5/weather?id=4407066&appid=4e6e434931c6cfa7afaeb300bacaac2a";
const palmyraApiURL = "https://api.openweathermap.org/data/2.5/weather?id=5102378&appid=4e6e434931c6cfa7afaeb300bacaac2a";
const nauvooApiURL = "https://api.openweathermap.org/data/2.5/weather?id=4903330&appid=4e6e434931c6cfa7afaeb300bacaac2a";
const rexburgApiURL = "https://api.openweathermap.org/data/2.5/weather?id=5605242&appid=4e6e434931c6cfa7afaeb300bacaac2a";

const getWeather = async () => {
    weather = document.getElementById("weather");
    if (random_index == 0) {
      apiURL = stlApiURL;
      weather.textContent = "Weather in St. Louis";
    }
    else if (random_index == 1) {
      apiURL = palmyraApiURL;
      weather.textContent = "Weather in Palmyra";
    }
    else if (random_index == 2) {
      apiURL = nauvooApiURL;
      weather.textContent = "Weather in Nauvoo";
    }
    else {
      apiURL = rexburgApiURL;
      weather.textContent = "Weather in Rexburg";
    }
    const response = await fetch(apiURL);
    const jsObject = await response.json();
    console.log(jsObject);

    document.querySelector('#current-temp').textContent = ((jsObject.main.temp - 273.15) * 1.8 + 32).toFixed(2);
    document.querySelector("#humidity_span").textContent = jsObject.main.humidity;
    const description = jsObject.weather[0].description;
    document.querySelector("#caption").textContent = description;
  };
getWeather();



// AUTOMATIC SLIDESHOW
let slideIndex = 0;
automaticSlides();

function automaticSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(automaticSlides, 6000); // Change image every 2 seconds
}

// SLIDESHOW
// let slideIndex = 1;
clickSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  clickSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  clickSlides(slideIndex = n);
}

function clickSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
prev.addEventListener("click", () => {plusSlides(-1);});
next.addEventListener("click", () => {plusSlides(1);});


// TEMPLE SPOTLIGHT
const requestURL = "https://sammieatkins.github.io/wdd230/final/data.json";

async function getTemples(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const temples = jsObject["temples"];
        console.log(temples);
        
        console.log(temples[random_index]);
        displayTemple(temples[random_index]);
    };
};
getTemples(requestURL);

function displayTemple(item) {
  let div = document.getElementById("spotlight_info")
  let img = document.createElement("img");
  let name = document.createElement("h2");
  let description = document.createElement("ul");

  img.setAttribute("src", `images/${item.img}`);
  img.setAttribute("alt", item.name);
  name.textContent = item.name;
  description.setAttribute("class","temples_list");
  item.history.forEach(listItem => {
    handleJsonList(listItem, description);
  })

  div.appendChild(img);
  div.appendChild(name);
  div.appendChild(description);
}
function handleJsonList(item, ul) {
  let li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
}