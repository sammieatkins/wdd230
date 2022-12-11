const requestURL = "https://sammieatkins.github.io/wdd230/final/data.json";

async function getTemples(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const temples = jsObject["temples"];
        console.log(temples);
        
        temples.forEach(temple => {
            displayCards(temple)
        });
        
        document.getElementById("list").addEventListener("click", () => {
            document.querySelector(".cards").innerHTML = "";
            document.querySelector("#card").removeAttribute("disabled");
            document.querySelector("#list").setAttribute("disabled", true);
            temples.forEach(temple => {                
                displayTable(temple)
            });
        });
        document.getElementById("card").addEventListener("click", () => {
            document.querySelector(".table").innerHTML = "";
            document.querySelector("#list").removeAttribute("disabled");     
            document.querySelector("#card").setAttribute("disabled", true);
            temples.forEach(temple => {
                displayCards(temple)
            });
        });        
    };
};

getTemples(requestURL);

function displayCards(item) {
    let card = document.createElement("section");

    let name = document.createElement("h2");
    let contact = document.createElement("h3");
    let services_title = document.createElement("h3");
    let history_title = document.createElement("h3");
    let address = document.createElement("p");
    let phone = document.createElement("p");

    let services = document.createElement("ul");
    let clothing = document.createElement("li");
    let cafeteria = document.createElement("li");
    let housing = document.createElement("li");
    let distribution = document.createElement("li");

    let history = document.createElement("ul");
    let announced = document.createElement("li");
    let groundbreaking = document.createElement("li");
    let dedicated = document.createElement("li");

    let closures = document.createElement("p");
    let img = document.createElement("img");

    contact.textContent = "Contact Info";
    name.textContent = item.name;
    address.textContent = item.address;
    phone.textContent = item.phone;

    services_title.textContent = "Services";
    clothing.textContent = item.clothing;
    cafeteria.textContent = item.cafeteria;
    housing.textContent = item.housing;
    distribution.textContent = item.distribution;

    history_title.textContent = "History";
    announced.textContent = item.announced;
    groundbreaking.textContent = item.groundbreaking;
    dedicated.textContent = item.dedicated;

    closures.textContent = item.closures;
    img.setAttribute("src", `images/${item.img}`);
    img.setAttribute("alt", item.name);

    services.appendChild(clothing);
    services.appendChild(cafeteria);
    services.appendChild(housing);
    services.appendChild(distribution);

    history.appendChild(announced);
    history.appendChild(groundbreaking);
    history.appendChild(dedicated);
    
    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(contact);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(services_title)
    card.appendChild(services);
    card.appendChild(history_title);
    card.appendChild(history);
    card.appendChild(closures);
    
    document.querySelector(".cards").appendChild(card);
}
// function displayCards(item) {
//     let card = document.createElement("section");

//     let name = document.createElement("h2");
//     let address = document.createElement("p");
//     let phone = document.createElement("p");
//     let services = document.createElement("p");
//     let history = document.createElement("p");
//     let closures = document.createElement("p");
//     let img = document.createElement("img");

//     name.textContent = item.name;
//     address.textContent = item.address;
//     phone.textContent = item.phone;
//     services.textContent = item.services;
//     history.textContent = item.history;
//     closures.textContent = item.closures;
//     img.setAttribute("src", `images/${item.img}`);
//     img.setAttribute("alt", item.name);

//     card.appendChild(name);
//     card.appendChild(img);
//     card.appendChild(address);
//     card.appendChild(phone);
//     card.appendChild(services);
//     card.appendChild(history);
//     card.appendChild(closures);
    
//     document.querySelector(".cards").appendChild(card);
// }

// h4 and p inside the table row
function displayTable(temple) {
    let largeQuery = window.matchMedia("(min-width: 64em)");
    let row = document.createElement("tr");
    let temple_name = document.createElement("td");
    let address = document.createElement("td");
    let phone = document.createElement("td");
    let list = document.createElement("ul");
    let history = document.createElement("p");
    let closures = document.createElement("p");
    if (largeQuery.matches) {
        temple_name.textContent = temple.name;
        address.textContent = temple.address;
        phone.textContent = temple.phone;
        
        history.textContent = temple.history;
        closures.textContent = temple.closures;

        row.appendChild(temple_name);
        row.appendChild(address);
        row.appendChild(phone);  
        row.appendChild(list);
        row.appendChild(history);
        row.appendChild(closures);      
    }
    else {
        console.log("made it to else")
        let temple_info = document.createElement("td");
        temple_info.setAttribute("id", "temple_info");
        temple_info.textContent = `${temple.name}\r\n${temple.address}\r\n${temple.phone}\r\n${temple.services}\r\n${temple.history}\r\n${temple.closures}`;
        temple_info.setAttribute('style', 'white-space: pre;');
        row.appendChild(temple_info);
    }
    document.querySelector(".table").appendChild(row);
}

// function getServices(item) {
//     let service = document.createElement("li");
//     service.textContent = item;
//     list.appendChild(service);
// }

// let services1 = document.createElement("li");
// let services2 = document.createElement("li");
// let services3 = document.createElement("li");
// let services4 = document.createElement("li");

// services1.textContent = temple.services[0];
// services2.textContent = temple.services[1];
// services3.textContent = temple.services[2];
// services4.textContent = temple.services[3];

// services.appendChild(services1);
// services.appendChild(services2);
// services.appendChild(services3);
// services.appendChild(services4);