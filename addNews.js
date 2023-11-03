
    function showAdminUI() {
     const showModalButton = document.getElementById('show-modal-button');
        

     const modal = document.createElement('div');
     modal.className = 'modal';
     modal.innerHTML = `
         <div class="modal-content">
             <span class="close" id="close-modal-button">&times;</span>
             <h2>Add News</h2>
             <input type="text" id="news-title" placeholder="News Title">
             <textarea id="news-content" placeholder="News Content"></textarea>
             <button id="add-news-button">Add News</button>
         </div>
     `;


     document.body.appendChild(modal);

     const closeModalButton = document.getElementById('close-modal-button');
     const addNewsButton = document.getElementById('add-news-button');
     const newsTitleInput = document.getElementById('news-title');
     const newsContentInput = document.getElementById('news-content');
     

     showModalButton.addEventListener('click', () => {
         modal.style.display = 'block';
     });

   
     closeModalButton.addEventListener('click', () => {
         modal.style.display = 'none';
     });

     addNewsButton.addEventListener('click', () => {
         const title = newsTitleInput.value;
         const content = newsContentInput.value;
         
         if (title && content) {
   
             const newsElement = document.createElement('div');
             newsElement.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
             const newsContainer = document.getElementById('news-container');
             newsContainer.appendChild(newsElement);
             
            
             newsTitleInput.value = '';
             newsContentInput.value = '';
      
             modal.style.display = 'none';
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
