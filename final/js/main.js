function makeFooter() {
    var footer = document.getElementById("footer");

    var logo = document.createElement("img");

    var info = document.createElement("p");

    var location = document.createElement("p");
    var locationLink = document.createElement("a");

    var socialIcons = document.createElement("p");
    var facebook = document.createElement("a");
    var twitter = document.createElement("a");
    var instagram = document.createElement("a");
    var pinterest = document.createElement("a");

    logo.setAttribute("src", "images/logo.png");
    logo.setAttribute("alt", "Temple Inn & Suites Logo");
    logo.setAttribute("id", "footer_logo");

    info.innerHTML = "Temple Inn & Suites | Samantha Atkins | WDD 230 | &copy; 2022";

    // LOCATION
    locationLink.innerHTML = '<i class="fa-solid fa-location-dot"></i> 4800 Montgomery Ln #300, Bethesda, MD 20814';
    locationLink.setAttribute("href", "https://goo.gl/maps/j4mHpQSnSeXCGteF7");
    locationLink.setAttribute("target", "blank");

    // SOCIALS
    facebook.innerHTML = '<i class="fa-brands fa-facebook-f"></i>';
    facebook.setAttribute("class", "social_icon");
    facebook.setAttribute("href", "https://www.facebook.com/");
    facebook.setAttribute("target", "blank");

    twitter.innerHTML = '<i class="fa-brands fa-twitter"></i>';
    twitter.setAttribute("class", "social_icon");
    twitter.setAttribute("href", "https://www.twitter.com/");
    twitter.setAttribute("target", "blank");

    instagram.innerHTML = '<i class="fa-brands fa-instagram"></i>';
    instagram.setAttribute("class", "social_icon");
    instagram.setAttribute("href", "https://www.instagram.com/");
    instagram.setAttribute("target", "blank");

    pinterest.innerHTML = '<i class="fa-brands fa-pinterest-p"></i>';
    pinterest.setAttribute("class", "social_icon");
    pinterest.setAttribute("href", "https://www.pinterest.com/");
    pinterest.setAttribute("target", "blank");

    // APPENDING
    location.appendChild(locationLink);

    socialIcons.setAttribute("class", "footer_social_icons");

    socialIcons.appendChild(facebook);
    socialIcons.appendChild(twitter);
    socialIcons.appendChild(instagram);
    socialIcons.appendChild(pinterest);


    footer.appendChild(logo);
    footer.appendChild(socialIcons);
    footer.appendChild(location);
    footer.appendChild(info);
}
makeFooter();