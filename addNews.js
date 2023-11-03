
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