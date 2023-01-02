// Typing effect "Next Generation"

var char = 0;
var text = 'Next Generation';
var speed = 70;
var scrolled = false;

function typeEffect() {
        if (char < text.length) {
            document.getElementById("type-effect").innerHTML += text.charAt(char);
            char++;
            setTimeout(typeEffect, speed);
        }
}

var myElement = document.getElementById('type-effect');

document.addEventListener("scroll", () =>  {
    var bounding = myElement.getBoundingClientRect();
    
    if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= window.innerWidth && bounding.bottom <= window.innerHeight) {
        if (scrolled != true) {
            typeEffect();
            scrolled = true;
        }
    }
})

var mobileMenu = document.getElementById("mobile-menu-container")

function toggleMobileMenu(){
    mobileMenu.classList.toggle("open")
}

function toggleElement(el) {
    el.classList.toggle("open")
}