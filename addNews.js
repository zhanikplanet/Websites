function getCurrentTime() {
  const currentDate = new Date();

  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  const day = currentDate.getDate().toString().padStart(2, "0");
  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");

  return `${month}-${day} ${hours}:${minutes}`;
}

function addNewsToContainer(title, content) {
  const newsDiv = document.createElement("div");
  newsDiv.id = "news";

  const titleElement = document.createElement("h3");
  titleElement.innerText = title;
  newsDiv.appendChild(titleElement);

  const contentElement = document.createElement("p");
  contentElement.id = "content";
  contentElement.innerText = content;
  newsDiv.appendChild(contentElement);

  const time = getCurrentTime();

  const timeElement = document.createElement("p");
  timeElement.id = "time";
  timeElement.innerText = time;
  newsDiv.appendChild(timeElement);

  // 将 news div 添加到容器
  const newsContainer = document.getElementById("news-container");
  newsContainer.appendChild(newsDiv);
}

function showAdminUI() {
  const showModalButton = document.getElementById("show-modal-button");

  const closeModalButton = document.getElementById("close-modal-button");
  const addNewsButton = document.getElementById("add-news-button");
  const newsTitleInput = document.getElementById("news-title");
  const newsContentInput = document.getElementById("news-content");
  const modalMain = document.getElementById("main-play");

  showModalButton.addEventListener("click", () => {
    modalMain.style.display = "flex";
  });

  closeModalButton.addEventListener("click", () => {
    modalMain.style.display = "none";
  });

  addNewsButton.addEventListener("click", () => {
    const title = newsTitleInput.value;
    const content = newsContentInput.value;

    if (title && content) {
      addNewsToContainer(title, content);
      newsTitleInput.value = "";
      newsContentInput.value = "";

      modal.style.display = "none";
    }
  });
}
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

window.addEventListener("scroll", function () {
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
