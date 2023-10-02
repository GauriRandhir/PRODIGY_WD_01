// JavaScript to change the navigation menu on scroll
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#333"; // Change background color when scrolled
    } else {
        navbar.style.backgroundColor = "transparent"; // Restore initial background color
    }
});

// JavaScript to change font color on hover
const menuItems = document.querySelectorAll(".navbar a");

menuItems.forEach(function(item) {
    item.addEventListener("mouseenter", function() {
        this.style.color = "#ff5733"; // Change font color on hover
    });

    item.addEventListener("mouseleave", function() {
        this.style.color = "#333"; // Restore initial font color
    });
});
