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
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let services = document.createElement("p");
    let history = document.createElement("p");
    let closures = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = item.name;
    address.textContent = item.address;
    phone.textContent = item.phone;
    services.textContent = item.services;
    history.textContent = item.history;
    closures.textContent = item.closures;
    img.setAttribute("src", `images/${item.img}`);
    img.setAttribute("alt", item.name);

    card.appendChild(name);
    card.appendChild(img);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(services);
    card.appendChild(history);
    card.appendChild(closures);
    
    document.querySelector(".cards").appendChild(card);
}

function displayTable(temple) {
    largeQuery = window.matchMedia("(min-width: 64em)");
    let row = document.createElement("tr");
    if (largeQuery.matches) {
        let name = document.createElement("td");
        let address = document.createElement("td");
        let phone = document.createElement("td");
        let services = document.createElement("p");
        let history = document.createElement("p");
        let closures = document.createElement("p");
        
        name.textContent = temple.name;
        address.textContent = temple.address;
        phone.textContent = temple.phone;
        services.textContent = temple.services;
        history.textContent = temple.history;
        closures.textContent = temple.closures;
        
        // row.appendChild(name.style.fontWeight = 'bold');
        row.appendChild(address);
        row.appendChild(phone);  
        row.appendChild(services);
        row.appendChild(history);
        row.appendChild(closures);      
    }
    else {
        let temple_info = document.createElement("td");
        temple_info.textContent = `${temple.name}\r\n${temple.address}\r\n${temple.phone}\r\n${temple.services}\r\n${temple.history}\r\n${temple.closures}`;
        temple_info.setAttribute('style', 'white-space: pre;');
        row.appendChild(temple_info);
    }
    document.querySelector(".table").appendChild(row);
}