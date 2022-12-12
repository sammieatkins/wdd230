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
    let address = document.createElement("p");
    let phone = document.createElement("p");
    
    let servicesTitle = document.createElement("h3");
    let servicesDiv = document.createElement("div");
    let services = document.createElement("ul");
    let clothing = document.createElement("li");
    let cafeteria = document.createElement("li");
    let housing = document.createElement("li");
    let distribution = document.createElement("li");
    
    let historyTitle = document.createElement("h3");
    let historyDiv = document.createElement("div");
    let history = document.createElement("ul");
    let announced = document.createElement("li");
    let groundbreaking = document.createElement("li");
    let dedicated = document.createElement("li");

    let closuresTitle = document.createElement("h3");
    let closures = document.createElement("ul");
    let img = document.createElement("img");

    contact.textContent = "Contact Info";
    name.textContent = item.name;
    address.textContent = item.address;
    phone.textContent = item.phone;

    servicesTitle.textContent = "Services";
    servicesDiv.setAttribute("class","list_container");
    services.setAttribute("class","temples_list");
    clothing.textContent = item.clothing;
    cafeteria.textContent = item.cafeteria;
    housing.textContent = item.housing;
    distribution.textContent = item.distribution;

    historyTitle.textContent = "History";
    historyDiv.setAttribute("class","list_container");
    history.setAttribute("class","temples_list");
    announced.textContent = item.announced;
    groundbreaking.textContent = item.groundbreaking;
    dedicated.textContent = item.dedicated;

    closuresTitle.textContent = "Closures";
    closures.setAttribute("class","temples_list");
    img.setAttribute("src", `images/${item.img}`);
    img.setAttribute("alt", item.name);
    
    services.appendChild(clothing);
    services.appendChild(cafeteria);
    services.appendChild(housing);
    services.appendChild(distribution);
    servicesDiv.appendChild(services);
    
    history.appendChild(announced);
    history.appendChild(groundbreaking);
    history.appendChild(dedicated);
    historyDiv.appendChild(history);
    
    card.appendChild(name);
    card.appendChild(img);
    
    card.appendChild(contact);
    card.appendChild(address);
    card.appendChild(phone);
    
    card.appendChild(servicesTitle)
    card.appendChild(servicesDiv);

    card.appendChild(historyTitle);
    card.appendChild(historyDiv);
    
    card.appendChild(closuresTitle);
    card.appendChild(closures);
    
    item.closuresList.forEach(listItem => {
        handleJsonList(listItem, closures);
    })
    document.querySelector(".cards").appendChild(card);
}

function handleJsonList(item, ul) {
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
}