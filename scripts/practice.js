// SEQUENCE 

// setting up new variable called date = (equals means assigned)
// dynamic year
let date = new Date();

console.log(date);

let year = date.getFullYear();

console.log(year);

document.querySelector('h1').textContent = year;

let current_date = document.lastModified;

console.log(current_date)

document.querySelector('div').textContent = current_date;