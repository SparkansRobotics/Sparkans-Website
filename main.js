// Scroll user to top of page on refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}





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

// If object in view

function inView(element) {
    var bounding = element.getBoundingClientRect();

    if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
        return true;
    } else {
        return false;
    }
}

// Event elements

var typeEffectElement = document.getElementById('type-effect');
var eventElements = document.getElementsByClassName('event');

// Event Handler

function eventHandler() {
    if (inView(typeEffectElement) && !typeEffectElement.classList.contains("active")) {
        typeEffect();
        typeEffectElement.classList.add("active");
    }
    for (var i=0; i < eventElements.length; i++) {
        if (inView(eventElements[i]) && !eventElements[i].classList.contains("active")) {
            eventElements[i].classList.add("active");
        }
    }
}

document.addEventListener("scroll", () =>  {
    eventHandler()
})



// Mobile menu toggle

var mobileMenu = document.getElementById("mobile-menu-container");

function toggleMobileMenu(){
    mobileMenu.classList.toggle("open");
}

function toggleElement(el) {
    el.classList.toggle("open");
}