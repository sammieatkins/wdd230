// select the elements to manipulate (output to)
const datefieldUK = document.querySelector(".date"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldateUK = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);

datefieldUK.innerHTML = `${fulldateUK}`;

// menu click event
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
