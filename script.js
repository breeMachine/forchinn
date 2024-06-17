document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    const options = document.getElementById('options');
    const yesButton = document.getElementById('yesButton');
    const rawrButton = document.getElementById('rawrButton');
    const imageContainer = document.getElementById('image');
    const displayedImage = document.getElementById('displayedImage');

    mainContent.addEventListener('click', function() {
        mainContent.classList.add('hidden');
        options.classList.remove('hidden');
        document.querySelectorAll('#options .animated-text').forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
        });
    });

    rawrButton.addEventListener('click', function() {
        options.classList.add('hidden');
        mainContent.innerHTML = `<h1 class="animated-text">Yaudin deh, aku mau kasih liat sesuatu ke kamu.</h1>
            <button id="showImageButton" class="animated-text">Apa tuh?</button>`;
        mainContent.classList.remove('hidden');
        document.querySelectorAll('#main-content .animated-text').forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
        });
    });

    document.addEventListener('click', function(e) {
        if (e.target && e.target.id == 'showImageButton') {
            mainContent.classList.add('hidden');
            options.innerHTML = `<p class="animated-text">Tenang, ini foto bukan hal yang cabul kok. Mau lihat?</p>
                <button id="yesImageButton" class="animated-text">Mauuu</button>
                <button id="noImageButton" class="animated-text">Gak</button>`;
            options.classList.remove('hidden');
            document.querySelectorAll('#options .animated-text').forEach((element, index) => {
                element.style.animationDelay = `${index * 0.2}s`;
            });
        }
    });

    document.addEventListener('click', function(e) {
        if (e.target && e.target.id == 'yesImageButton') {
            options.classList.add('hidden');
            imageContainer.classList.remove('hidden');
            displayedImage.src = "https://raw.githubusercontent.com/breeMachine/forchinn/main/Images/Picsart_24-05-13_17-25-58-870.jpg";
        }
        if (e.target && e.target.id == 'noImageButton') {
            options.classList.add('hidden');
            mainContent.innerHTML = `<h1 class="animated-text">Yah, mengsedih. Tapi tetap kupaksa kamu lihat hehe.</h1>`;
            mainContent.classList.remove('hidden');
            document.querySelectorAll('#main-content .animated-text').forEach((element, index) => {
                element.style.animationDelay = `${index * 0.2}s`;
            });
            imageContainer.classList.remove('hidden');
            displayedImage.src = "https://raw.githubusercontent.com/breeMachine/forchinn/main/Images/Picsart_24-05-13_17-25-58-870.jpg";
        }
    });

});
