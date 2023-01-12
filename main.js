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