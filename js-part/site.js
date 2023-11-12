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

const sidebar = document.getElementById("side-bar");

// document.addEventListener("keydown", function (event) {
//   if (event.key === "s") {
//     toggleSidebar();
//   }
// });

// function toggleSidebar() {
//   sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
// }
document.addEventListener("mousemove", function (event) {
  const mouseX = event.clientX;

  const threshold = 200;

  if (mouseX <= threshold) {
    showSidebar();
  } else {
    hideSidebar();
  }
});

function showSidebar() {
  sidebar.style.left = "0";
}

function hideSidebar() {
  sidebar.style.left = "-250px";
}
// window.addEventListener("scroll", function () {
//   let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
//   if (currentScroll > lastScrollTop) {
//     // Прокрутка вниз
//     document.querySelector("footer").classList.remove("hidden");
//   } else {
//     // Прокрутка вверх
//     document.querySelector("footer").classList.add("hidden");
//   }
//   lastScrollTop = currentScroll;
// });
