// select the elements to manipulate (output to)
const datefieldUK = document.querySelector(".date"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);

datefieldUK.innerHTML = `${fulldateUK}`;

// footer last updated
let current_date = document.lastModified;

console.log(current_date);

document.querySelector('.updated').textContent = current_date;

// message
const parent = document.querySelector(".msg_box");

if (now.getDay() == 1 || now.getDay() == 2) {
    parent.style.display = "block";
}

// temp, speed, chill
// weather stuff
const temperature = document.querySelector("#temp").textContent;
const windSpeed = document.querySelector("#speed").textContent;

if (temperature < 50 && windSpeed > 3) {
    let chill = Math.round((35.74 + (0.6215 * temperature))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275*temperature*Math.pow(windSpeed,0.16)));
    const windChill = document.querySelector("#chill").textContent;
    windChill.innerHTML = chill + "&#8457;";
}

// menu click event
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}
const x = querySelector("#hamburgerBtn");
x.onclick = toggleMenu;


