// Javascript

// Scroll user to top of page on refresh

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// Mobile menu toggle

var mobileMenu = document.getElementById("mobile-menu-container");
var themeBody = document.querySelector("body");

function toggleMobileMenu(){
    mobileMenu.classList.toggle("open");
}
function toggleTheme(){
    themeBody.classList.toggle("open");
}
// --sub - Any element toggle
function toggleElement(el) {
    el.classList.toggle("open");
}



// If object in view (Better working for updated browsers)

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {   
        if (entry.isIntersecting) {
            entry.target.classList.replace("inactive", "active");
        }
    })
})



// Event elements

const hiddenElements = document.querySelectorAll(".inactive");
hiddenElements.forEach((el) => observer.observe(el));

// ???

const messages = [
    "Trying to look at our code, are we? ;)",
    "Looking for secrets?",
    "There's nothing to see here.",
    "01010011 01110000 01100001 01110010 01101011 01100001 01101110 01110011",
    "Welcome to the browser console. We hope you enjoy your stay."
];

window.addEventListener("load", function() {
    console.log(messages[Math.floor(Math.random() * messages.length)]);
});