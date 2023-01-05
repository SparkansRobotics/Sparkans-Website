// Javascript 

// Scroll user to top of page on refresh

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// Mobile menu toggle

var mobileMenu = document.getElementById("mobile-menu-container");

function toggleMobileMenu(){
    mobileMenu.classList.toggle("open");
}
// --sub - Any element toggle
function toggleElement(el) {
    el.classList.toggle("open");
}