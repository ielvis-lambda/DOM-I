const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

//Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Update the nav links
let navitem1 = document.getElementsByTagName("a")[0];
navitem1.textContent = siteContent["nav"]["nav-item-1"]

let navitem2 = document.getElementsByTagName("a")[1];
navitem2.textContent = siteContent["nav"]["nav-item-2"]

let navitem3 = document.getElementsByTagName("a")[2];
navitem3.textContent = siteContent["nav"]["nav-item-3"]

let navitem4 = document.getElementsByTagName("a")[3];
navitem4.textContent = siteContent["nav"]["nav-item-4"]

let navitem5 = document.getElementsByTagName("a")[4];
navitem5.textContent = siteContent["nav"]["nav-item-5"]

let navitem6 = document.getElementsByTagName("a")[5];
navitem6.textContent = siteContent["nav"]["nav-item-6"]

//CTA
let ctatitle = document.getElementsByTagName("h1")[0];
ctatitle.textContent = siteContent["cta"]["h1"];
ctatitle.innerHTML = `DOM <br> is </br> awesome`;

let buttontext = document.getElementsByTagName("button")[0];
buttontext.textContent = siteContent["cta"]["button"];

let headerimage = document.getElementById("cta-img");
headerimage.setAttribute('src', siteContent["cta"]["img-src"]);

//Main-Content
let featurestitle = document.getElementsByTagName("h4")[0];
featurestitle.textContent = siteContent["main-content"]["features-h4"];

let abouttitle = document.getElementsByTagName("h4")[1];
abouttitle.textContent = siteContent["main-content"]["about-h4"];

let servicestitle = document.getElementsByTagName("h4")[2];
servicestitle.textContent = siteContent["main-content"]["services-h4"];

let producttitle = document.getElementsByTagName("h4")[3];
producttitle.textContent = siteContent["main-content"]["product-h4"];

let visiontitle = document.getElementsByTagName("h4")[4];
visiontitle.textContent = siteContent["main-content"]["vision-h4"];

let featurescontent = document.getElementsByTagName("p")[0];
featurescontent.textContent = siteContent["main-content"]["features-content"];

let aboutcontent = document.getElementsByTagName("p")[1];
aboutcontent.textContent = siteContent["main-content"]["about-content"];

let middleimage = document.getElementById("middle-img");
middleimage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let servicescontent = document.getElementsByTagName("p")[2];
servicescontent.textContent = siteContent["main-content"]["services-content"];

let productcontent = document.getElementsByTagName("p")[3];
productcontent.textContent = siteContent["main-content"]["product-content"];

let visioncontent = document.getElementsByTagName("p")[4];
visioncontent.textContent = siteContent["main-content"]["product-content"];

// Contact
let contacttitle = document.getElementsByTagName("h4")[5];
contacttitle.textContent = siteContent["contact"]["contact-h4"];;

let address = document.getElementsByTagName("p")[5];
address.textContent = siteContent["contact"]["address"];
address.innerHTML = `123 Way 456 Street <br></br> Somewhere, USA`;

let phone = document.getElementsByTagName("p")[6];
phone.textContent = siteContent["contact"]["phone"];

let email = document.getElementsByTagName("p")[7];
email.textContent = siteContent["contact"]["email"];

// Footer
let footer = document.getElementsByTagName("p")[8];
footer.textContent = siteContent["footer"]["copyright"];

// Task 4 - Add New Content
//Append and Prepend a Nav item
const firstnav = document.createElement("a");
firstnav.innerText = ('History');
firstnav.href = ('#');
const lastnav = document.createElement("a");
lastnav.innerText = ('Login');
lastnav.href = ('#');
const mainNav = document.querySelector('nav');

mainNav.prepend(firstnav);
mainNav.appendChild(lastnav);


console.log(mainNav);
//Change Nav text to green
var aElements = document.getElementsByTagName('a');

for (var i = 0; i < aElements.length; i++) {
  aElements[i].style.color = 'green';
}

//Stretch
buttontext.onclick = function () {
  for (var i = 0; i < aElements.length; i++) {
    aElements[i].style.color = 'purple';
  }
  const mainHeading = document.querySelector('section h1');
  mainHeading.style.color = 'red';

  mainNav.style.border = 'solid blue';

  const subheadings = document.querySelectorAll('section h4');
  for (var i = 0; i < subheadings.length; i++) {
    subheadings[i].style.color = 'green';
  }
}
