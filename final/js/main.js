
function createFoot() {
    var footer = document.createElement("FOOTER");
    document.body.appendChild(f);
    var p = document.createElement("P");
    var txt = document.createTextNode("Copyright ©, 2019");
    p.appendChild(txt);
    f.appendChild(p);
}
createFoot();

function makeFooter() {
    var f = document.getElementsByTagName("footer");

    var logo = document.createElement("img");
    var info = document.createElement("p");

    logo.setAttribute("src", "images/logo.png");
    logo.setAttribute("alt", "Temple Inn & Suites Logo");
    info.textContent = "Temple Inn & Suites | Site Plan | Samantha Atkins | &copy; 2022";

    f.appendChild(logo);
}
makeFooter();