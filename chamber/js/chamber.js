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

// menu click event
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}
const x = document.querySelector("#hamburgerBtn");
x.onclick = toggleMenu;

