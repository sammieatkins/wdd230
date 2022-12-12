function makeFooter() {
    var footer = document.getElementById("footer");

    var logo = document.createElement("img");

    var info = document.createElement("p");

    var contact = document.createElement("div");
    var phone_email = document.createElement("div");
    var phone = document.createElement("p");
    var email = document.createElement("p");

    var location = document.createElement("p");
    var locationLink = document.createElement("a");

    var socialIcons = document.createElement("p");
    var facebook = document.createElement("a");
    var twitter = document.createElement("a");
    var instagram = document.createElement("a");
    var pinterest = document.createElement("a");

    var modified = document.createElement("p");

    var sources = document.createElement("a");

    logo.setAttribute("src", "images/logo.png");
    logo.setAttribute("alt", "Temple Inn & Suites Logo");
    logo.setAttribute("id", "footer_logo");

    // SOURCES
    sources.innerHTML = "Sources";
    sources.setAttribute("href", "sources.html")
    
    info.innerHTML = "Temple Inn & Suites | Samantha Atkins | WDD 230 | &copy; 2022 | ";

    // CONTACT
    contact.setAttribute("id", "footer_contact")
    phone_email.setAttribute("id", "phone_email")
    phone.textContent = "123-456-7890 ";
    email.textContent = "temples@gmail.com ";

    // LOCATION
    location.setAttribute("id", "location")
    locationLink.innerHTML = '<i class="fa-solid fa-location-dot"></i> 4800 Montgomery Ln #300, Bethesda, MD 20814';
    locationLink.setAttribute("href", "https://goo.gl/maps/j4mHpQSnSeXCGteF7");
    locationLink.setAttribute("target", "blank");

    // SOCIALS
    facebook.innerHTML = '<i class="fa-brands fa-facebook-f"></i>';
    facebook.setAttribute("class", "footer_social_icon");
    facebook.setAttribute("href", "https://www.facebook.com/");
    facebook.setAttribute("target", "blank");

    twitter.innerHTML = '<i class="fa-brands fa-twitter"></i>';
    twitter.setAttribute("class", "footer_social_icon");
    twitter.setAttribute("href", "https://www.twitter.com/");
    twitter.setAttribute("target", "blank");

    instagram.innerHTML = '<i class="fa-brands fa-instagram"></i>';
    instagram.setAttribute("class", "footer_social_icon");
    instagram.setAttribute("href", "https://www.instagram.com/");
    instagram.setAttribute("target", "blank");

    pinterest.innerHTML = '<i class="fa-brands fa-pinterest-p"></i>';
    pinterest.setAttribute("class", "footer_social_icon");
    pinterest.setAttribute("href", "https://www.pinterest.com/");
    pinterest.setAttribute("target", "blank");

    // LAST UPDATED
    let lastModified = new Date(document.lastModified);
    modified.textContent = `Last Modified: ${lastModified.toLocaleDateString()}`;

    // APPENDING
    location.appendChild(locationLink);

    socialIcons.setAttribute("class", "footer_social_icons");

    socialIcons.appendChild(facebook);
    socialIcons.appendChild(twitter);
    socialIcons.appendChild(instagram);
    socialIcons.appendChild(pinterest);

    info.appendChild(sources);

    phone_email.appendChild(phone);
    phone_email.appendChild(email);
    contact.appendChild(phone_email);
    contact.appendChild(location);

    footer.appendChild(logo);
    footer.appendChild(socialIcons);
    footer.appendChild(modified);
    footer.appendChild(contact);
    footer.appendChild(info);
}
makeFooter();