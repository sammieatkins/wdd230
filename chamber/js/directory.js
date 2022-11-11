// directory
// -- event listeners on table button and card button
// -- get rid of table/cards as well
const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

async function getProphets(requestURL) {
    const response = await fetch(requestURL);
    console.log(response);
    if (response.ok) {
        const jsObject = await response.json();
        console.log(jsObject);
        const prophets = jsObject["prophets"];
        console.log(prophets);
        prophets.forEach(displayProphets)
    }
};