document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    const revealContent = document.getElementById('reveal');
    const questionContent = document.getElementById('question');
    const storyContent = document.getElementById('story');
    const revealButton = document.getElementById('revealButton');
    const yesVideoButton = document.getElementById('yesVideoButton');
    const noVideoButton = document.getElementById('noVideoButton');
    const continueButton = document.getElementById('continueButton');
    const audio = document.getElementById('audio');

    mainContent.addEventListener('click', function() {
        mainContent.classList.add('hidden');
        revealContent.classList.remove('hidden');
        document.querySelectorAll('#reveal .animated-text').forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
        });
    });

    revealButton.addEventListener('click', function() {
        revealContent.classList.add('hidden');
        questionContent.classList.remove('hidden');
        document.querySelectorAll('#question .animated-text').forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
        });
    });

    yesVideoButton.addEventListener('click', function() {
        questionContent.classList.add('hidden');
        storyContent.classList.remove('hidden');
        audio.play();
        document.querySelectorAll('#story .animated-text').forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
        });
        continueButton.classList.remove('hidden');
    });

    noVideoButton.addEventListener('click', function() {
        questionContent.classList.add('hidden');
        storyContent.classList.remove('hidden');
        audio.play();
        document.querySelectorAll('#story .animated-text').forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
        });
        continueButton.classList.remove('hidden');
    });

    continueButton.addEventListener('click', function() {
        storyContent.innerHTML = `<p class="animated-text">Cerita panjang disini. Tambahkan cerita sesuai keinginanmu.</p>`;
        document.querySelectorAll('#story .animated-text').forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
        });
    });

});
