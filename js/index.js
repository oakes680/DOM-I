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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelectorAll('nav a')
nav[0].textContent = siteContent['nav']['nav-item-1']
nav[1].textContent = siteContent['nav']['nav-item-2']
nav[2].textContent = siteContent['nav']['nav-item-3']
nav[3].textContent = siteContent['nav']['nav-item-4']
nav[4].textContent = siteContent['nav']['nav-item-5']
nav[5].textContent = siteContent['nav']['nav-item-6']

let h1 = document.querySelector("h1");
h1.textContent = siteContent.cta.h1;

let ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent["cta"]["img-src"])

let button = document.querySelector('.cta-text button')
button.textContent = siteContent.cta.button


let h4 = document.querySelectorAll('.top-content h4')
h4[0].textContent = siteContent["main-content"]["features-h4"]
h4[1].textContent = siteContent["main-content"]["about-h4"]

let p = document.querySelectorAll('.top-content p')
p[0].textContent = siteContent['main-content']['features-content']
p[1].textContent = siteContent['main-content']['about-content']

let midimg = document.getElementById("middle-img");
midimg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


let bottomh4 = document.querySelectorAll('.bottom-content h4')
bottomh4[0].textContent = siteContent["main-content"]["services-h4"]
bottomh4[1].textContent = siteContent["main-content"]["product-h4"]
bottomh4[2].textContent = siteContent["main-content"]["vision-h4"]

let bottomp = document.querySelectorAll('.bottom-content p')
bottomp[0].textContent = siteContent['main-content']['services-content']
bottomp[1].textContent = siteContent['main-content']['product-content']
bottomp[2].textContent = siteContent['main-content']['vision-content']


let contacth4 = document.querySelector('.contact h4')
contacth4.textContent = siteContent['contact']['contact-h4']

let contactp = document.querySelectorAll('.contact p')
contactp[0].textContent = siteContent['contact']['address']
contactp[1].textContent = siteContent['contact']['phone']
contactp[2].textContent = siteContent['contact']['email']




let footerp = document.querySelector('footer p')
footerp.textContent = siteContent['footer']['copyright']

let nav2 = document.getElementsByTagName('a')
for (let e of nav2){e.style.color = 'green'}



let new1 = document.createElement('a')
let new2 = document.createElement('a')

let parent = document.querySelector('nav')
let parent2 = document.querySelector('nav')

new1.textContent = 'hello';
new2.textContent = 'Dog';

parent.appendChild(new1)

parent.prepend(new2)

