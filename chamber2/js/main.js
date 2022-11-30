// date formatting in header
const datefieldUK = document.querySelector(".date");

const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);

datefieldUK.innerHTML = `${fulldateUK}`;


// footer last updated
let current_date = document.lastModified;

// console.log(current_date);

document.querySelector('.updated').textContent = current_date;


// message
const parent = document.querySelector(".msg_box");

if (now.getDay() == 1 || now.getDay() == 2) {
    parent.style.display = "block";
}


// menu click event
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}
const x = document.querySelector("#hamburgerBtn");
x.onclick = toggleMenu;