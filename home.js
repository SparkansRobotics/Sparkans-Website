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



// Parallax

function parallax() {
	var pLowUp = document.getElementById("parallax-lowUp");
    var pLowDown = document.getElementById("parallax-lowDown");
    var pHighUp = document.getElementById("parallax-highUp");

    pLowUp.style.top = 50 - window.pageYOffset/150 + "%";
    pLowDown.style.top = 50 + window.pageYOffset/200 + "%";
    pHighUp.style.top = 50 - window.pageYOffset/50 + "%";
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

window.addEventListener("scroll", function() {
	parallax();	
});