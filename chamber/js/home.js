// weather stuff
const temperature = document.querySelector("#temp").textContent;
const windSpeed = document.querySelector("#speed").textContent;

if (temperature < 50 && windSpeed > 3) {
    const chill = Math.round((35.74 + (0.6215 * temperature))-(35.75 * Math.pow(windSpeed,0.16)) + (0.4275 * temperature * Math.pow(windSpeed,0.16)));
    document.querySelector("#chill").innerHTML = chill + "&#8457;";
}