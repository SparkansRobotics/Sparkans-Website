// Javascript


// Scroll user to top of page on refresh

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}



// Typing effect "Next Generation"

var char = 0;
var text = 'Next Generation';
var speed = 70;

function typeEffect() {
    if (char < text.length) {
        document.getElementById("type-effect").innerHTML += text.charAt(char);
        char++;
        setTimeout(typeEffect, speed);
    }
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



// Event Listeners (Type-Effect, _, _)

var executed = false
document.addEventListener("scroll", () => {
    var bounding = document.getElementById("type-effect").getBoundingClientRect();

    if (bounding.top >= 0 && bounding.bottom <= window.innerHeight && !executed) {
        typeEffect();
        executed = true;
    }
});



// Mobile menu toggle

var mobileMenu = document.getElementById("mobile-menu-container");

function toggleMobileMenu(){
    mobileMenu.classList.toggle("open");
}
// --sub - Any element toggle
function toggleElement(el) {
    el.classList.toggle("open");
}