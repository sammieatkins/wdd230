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
    };
};

getTemples(requestURL);

function displayCards(item) {
    // create card
    let card = document.createElement("section");
    
    // img
    let img = document.createElement("img");
    img.setAttribute("src", `images/${item.img}`);
    img.setAttribute("alt", item.name);

    // contact info
    let name = document.createElement("h2");
    let contactTitle = document.createElement("h3");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    contactTitle.textContent = "Contact Info";
    name.textContent = item.name;
    address.textContent = item.address;
    phone.textContent = item.phone;
    
    // services
    let servicesTitle = document.createElement("h3");
    let services = document.createElement("ul");
    servicesTitle.textContent = "Services";
    services.setAttribute("class","temples_list");
    item.closuresList.forEach(listItem => {
        handleJsonList(listItem, services);
    })
    
    // history
    let historyTitle = document.createElement("h3");
    let history = document.createElement("ul");
    historyTitle.textContent = "History";
    history.setAttribute("class","temples_list");
    item.closuresList.forEach(listItem => {
        handleJsonList(listItem, history);
    })

    // closures
    let closuresTitle = document.createElement("h3");
    let closures = document.createElement("ul");
    closuresTitle.textContent = "Closures";
    closures.setAttribute("class","temples_list");
    item.closuresList.forEach(listItem => {
        handleJsonList(listItem, closures);
    })

    // append to card
    card.appendChild(name);
    card.appendChild(img);    
    card.appendChild(contactTitle);
    card.appendChild(address);
    card.appendChild(phone);    
    card.appendChild(servicesTitle)
    card.appendChild(services);
    card.appendChild(historyTitle);
    card.appendChild(history);
    card.appendChild(closuresTitle);
    card.appendChild(closures);
    
    // append card to existing div
    document.querySelector(".cards").appendChild(card);
}

function handleJsonList(item, ul) {
    let li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
}