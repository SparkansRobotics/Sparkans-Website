// Javascript

// Typing effect "Next Generation"

var char = 0;
const text = 'Innovators';
const speed = 100;
const type = document.getElementById("type-effect");

function typeEffect() {
    if (char < text.length) {
        type.innerHTML += text.charAt(char);
        char++;
        setTimeout(typeEffect, speed);
    }
}


// Event Listeners (Type-Effect, _, _)

var executed = false
document.addEventListener("scroll", () => {
    var bounding = type.getBoundingClientRect();
    
    if (bounding.top >= 0 && bounding.bottom <= window.innerHeight && !executed) {
        typeEffect();
        executed = true;
    } else if (!type.classList.contains("executed") && executed) {
        type.classList.add("executed");
    }
});