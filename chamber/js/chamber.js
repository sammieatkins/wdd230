// date formatting in header
const datefieldUK = document.querySelector(".date");

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


// lazy load
const image = document.querySelectorAll('img');

const pimages = document.querySelectorAll('[data-src]');
const options = {
    threshold: 1,
rootMargin: "0px 0px 100px 0px"
}

function preloadImage(img){
    const source = img.getAttribute('data-src');
    if (!source) {
        return;
    }
    
    img.src = source;
}

const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
        });
    },options);
    
    pimages.forEach(image => {
        io.observe(image);
    })
    
    
// date since last visit
let currDate = Date.now();

console.log(currDate);

let visitMessage = document.querySelector("#visitMessage");
let daysSince = document.querySelector("#daysSince");

if (!localStorage.getItem("visitDate"))
{
    localStorage.setItem("visitDate", currDate);
    visitMessage.textContent = "This is your first visit."
}
else
{
    let prevDate = localStorage.getItem("visitDate");
    
    let difference = currDate - prevDate;
    // console.log(difference);
    let daysBtwn = Math.floor(difference / 1000 / 60 / 60 / 24);
    daysSince.textContent = daysBtwn;
    // console.log(daysBtwn);
    localStorage.setItem("visitDate", currDate);
}


// menu click event
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}
const x = document.querySelector("#hamburgerBtn");
x.onclick = toggleMenu;


// weather stuff
const temperature = document.querySelector("#temp").textContent;
const windSpeed = document.querySelector("#speed").textContent;

if (temperature < 50 && windSpeed > 3) {
    const chill = Math.round((35.74 + (0.6215 * temperature))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275 * temperature * Math.pow(windSpeed,0.16)));
    document.querySelector("#chill").innerHTML = chill + "&#8457;";
}