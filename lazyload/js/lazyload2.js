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


// localStorage

// localStorage.setItem("msg1", "Hello Permanent");

// sessionStorage.setItem("msg2", "Hello Temporary");



// difference in days between two dates (or last time they visited)

// <h1 id="visitMessage">Days since last visit: <span id="daysSince"></span></h1>

let currDate = Date.now();
// let currDate = new Date("2022-03-24");
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