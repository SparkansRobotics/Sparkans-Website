// Javascript

// Typing effect "Next Generation"

var char = 0;
var text = 'Innovators';
var speed = 70;

function typeEffect() {
    if (char < text.length) {
        document.getElementById("type-effect").innerHTML += text.charAt(char);
        char++;
        setTimeout(typeEffect, speed);
    }
}


// Event Listeners (Type-Effect, _, _)

var executed = false
document.addEventListener("scroll", () => {
    var bounding = document.getElementById("type-effect").getBoundingClientRect();

    if (bounding.top >= 0 && bounding.bottom <= window.innerHeight && !executed) {
        typeEffect();
        executed = true;
    }
});