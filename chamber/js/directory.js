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
        prophets.forEach(displayBusinesses)
    }
};

getBusinesses(requestURL);

function displayBusinesses(item) {
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

// // HOW TO REMOVE
// // -- put all cards in a div and hide that
// // -- remove other thing first, then display new
// // card.style.display = "none";
// card.forEach((item) => {
//     item.remove();
// })