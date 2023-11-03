const navbar = document.getElementById("navbar");
const icons = document.querySelectorAll(".nav-item i, .footer i");

icons.forEach((icon) => {
    icon.addEventListener("mouseover", function () {
        icon.classList.add("slide-fwd-center");
    });

    icon.addEventListener("mouseout", function () {
        icon.classList.remove("slide-fwd-center");
    });
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        toggleNavMenu();
       
    }
});

function toggleNavMenu() {
     console.log("Success");
    if (navbar.style.display === "flex") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "flex";
    }
}
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Прокрутка вниз
        document.querySelector("footer").classList.remove("hidden");
    } else {
        // Прокрутка вверх
        document.querySelector("footer").classList.add("hidden");
    }
    lastScrollTop = currentScroll;
});
