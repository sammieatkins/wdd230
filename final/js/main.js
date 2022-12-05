function makeFooter() {
    var footer = document.getElementById("footer");

    var logo = document.createElement("img");
    var info = document.createElement("p");
    var location = document.createElement("a");

    logo.setAttribute("src", "images/logo.png");
    logo.setAttribute("alt", "Temple Inn & Suites Logo");
    logo.setAttribute("id", "footer_logo")

    info.innerHTML = "Temple Inn & Suites | Site Plan | Samantha Atkins | &copy; 2022";

    // <i class="fa-solid fa-location-dot"></i>
    // location.innerHTML = " | &#128205;";
    location.innerHTML = ' | <i class="fa-solid fa-location-dot"></i>';
    location.setAttribute("href", "https://goo.gl/maps/j4mHpQSnSeXCGteF7");
    location.setAttribute("target", "blank")

    info.appendChild(location);

    footer.appendChild(logo);
    footer.appendChild(info);
}
makeFooter();