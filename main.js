// Javascript

// Scroll user to top of page on refresh

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

// Mobile menu toggle

var mobileMenu = document.getElementById("mobile-menu-container");
var themeSlider = document.getElementById("theme");

function toggleMobileMenu(){
    mobileMenu.classList.toggle("open");
}
// --sub - Any element toggle
function toggleElement(el) {
    el.classList.toggle("open");
}

// var header = document.getElementById("header");

// function toggleTheme(){
//     if (document.documentElement.style.getPropertyValue('--easy-black') == 'whitesmoke') {
//         document.documentElement.style.setProperty('--easy-black', '#030303');
//         document.documentElement.style.setProperty('--background-gradient', 'rgb(16, 20, 27)');
//         header.style.backgroundColor = "";
//         header.style.boxShadow = "none";
//         document.getElementById("logo").src = "Graphics/SparkansLogoSmall.png";
//         document.documentElement.style.setProperty('--white', 'whitesmoke');
//         document.documentElement.style.setProperty('--dark-gray', '#151516');
//     } else {
//         document.documentElement.style.setProperty('--easy-black', 'whitesmoke');
//         document.documentElement.style.setProperty('--background-gradient', 'rgb(240, 240, 240)');
//         header.style.backgroundColor = "#edf2fa";
//         header.style.boxShadow = "1px 2px 3px lightgray";
//         document.getElementById("logo").src = "Graphics/SparkansLogoBlackSmall.png";
//         document.documentElement.style.setProperty('--white', 'hsl(210,8%,25%)');
//         document.documentElement.style.setProperty('--dark-gray', '#e9e9e9'); //change
//         document.documentElement.style.setProperty('--navy-accent', '#97a5bd'); // change
//         document.documentElement.style.setProperty('--navy-accent-saturated', '#8ba2c7'); // change
//     }
// }


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