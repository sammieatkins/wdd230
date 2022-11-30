// directory
// -- event listeners on table button and card button
// -- get rid of table/cards as well
const requestURL = "https://sammieatkins.github.io/wdd230/chamber2/data.json";

async function getBusinesses(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const businesses = jsObject["businesses"];
        console.log(businesses);
        
        businesses.forEach(business => {
            displayCards(business)
        });
        
        document.getElementById("list").addEventListener("click", () => {
            document.querySelector(".cards").innerHTML = "";
            document.querySelector("#card").removeAttribute("disabled");
            document.querySelector("#list").setAttribute("disabled", true);
            businesses.forEach(business => {                
                displayTable(business)
            });
        });
        document.getElementById("card").addEventListener("click", () => {
            document.querySelector(".table").innerHTML = "";
            document.querySelector("#list").removeAttribute("disabled");     
            document.querySelector("#card").setAttribute("disabled", true);
            businesses.forEach(business => {
                displayCards(business)
            });
        });        
    };
};

getBusinesses(requestURL);

function displayCards(item) {
    let card = document.createElement("section");

    let h2 = document.createElement("h2");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("a");
    let img = document.createElement("img");

    // h2.textContent = item.name + ' ' + item.lastname;
    h2.textContent = item.name;
    address.textContent = item.address;
    phone.textContent = item.phone;
    website.setAttribute("href", item.website);
    website.setAttribute("target", "_blank");
    website.textContent = item.website;
    img.setAttribute("src", `images/${item.logo}`);
    img.setAttribute("alt", item.name);


    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    
    document.querySelector(".cards").appendChild(card);
}
function displayTable(item) {
    let row = document.createElement("tr");

    let name = document.createElement("td");
    let address = document.createElement("td");
    let phone = document.createElement("td");
    let website = document.createElement("td");

    name.textContent = item.name;
    address.textContent = item.address;
    phone.textContent = item.phone;
    website.textContent = item.website;

    row.appendChild(name);
    row.appendChild(address);
    row.appendChild(phone);
    row.appendChild(website); 
    
    document.querySelector(".table").appendChild(row);
}

// // HOW TO REMOVE
// // -- put all cards in a div and hide that
// // -- remove other thing first, then display new
// // card.style.display = "none";
// card.forEach((item) => {
//     item.remove();
// })