// Variables
const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

// Mobile Nav Event-Listener
navToggle.addEventListener('click', function() {

    const visibility = primaryNav.getAttribute("data-visible")

    if(visibility === "false") {
        primaryNav.setAttribute("data-visible", true)
        navToggle.setAttribute("aria-expanded", true)
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.3)"
        primaryNav.style.backgroundColor = "white"

    } else if(visibility === "true") {
        primaryNav.setAttribute("data-visible", false)
        navToggle.setAttribute("aria-expanded", false)
        document.body.style.backgroundColor = "hsl(36, 100%, 99%)"
    }
})