let date = new Date();

console.log(date);

let year = date.getFullYear();

console.log(year);

// class and id references same as css
document.querySelector('.year').textContent = year;

let current_date = document.lastModified;

console.log(current_date)

document.querySelector('.updated').textContent = current_date;