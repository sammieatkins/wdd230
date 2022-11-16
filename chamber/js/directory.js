// directory
// -- event listeners on table button and card button
// -- get rid of table/cards as well
const requestURL = "https://sammieatkins.github.io/wdd230/chamber/data.json";

async function getBusinesses(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const businesses = jsObject["businesses"];
        console.log(businesses);
    }
};

getBusinesses(requestURL);

document.getElementById("list").addEventListener("click", displayTable);
document.getElementById("card").addEventListener("click", displayCards);

// function displayCondition(buttonRequest) {
//     if (buttonRequest) {
//         businesses.forEach(displayCards);
//     }
//     else {
//         businesses.forEach(displayTable);
//     }
// }

function displayCards(item) {
    let card = document.createElement("section");

    let h2 = document.createElement("h2");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("p");
    let img = document.createElement("img");

    // h2.textContent = item.name + ' ' + item.lastname;
    h2.textContent = item.name;
    address.textContent = item.address;
    phone.textContent = item.phone;
    website.textContent = item.website;
    img.setAttribute("src", item.logo);
    img.setAttribute("alt", item.name);


    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(img);
    
    document.querySelector(".cards").appendChild(card);
}
function displayTable(item) {
    let row = document.createElement("table");

    let h2 = document.createElement("h2");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("p");

    h2.textContent = item.name;
    address.textContent = item.address;
    phone.textContent = item.phone;
    website.textContent = item.website;

    row.appendChild(h2);
    row.appendChild(address);
    row.appendChild(phone);
    row.appendChild(website);
    
}



// // HOW TO REMOVE
// // -- put all cards in a div and hide that
// // -- remove other thing first, then display new
// // card.style.display = "none";
// card.forEach((item) => {
//     item.remove();
// })