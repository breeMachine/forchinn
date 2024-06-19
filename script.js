document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    const options = document.getElementById('options');
    const showSomething = document.getElementById('show-something');
    const ask = document.getElementById('ask');
    const showContent = document.getElementById('show-content');
    const storyIntro = document.getElementById('story-intro');
    const story = document.getElementById('story');
    const audio = document.getElementById('audio');

    const yesButton = document.getElementById('yesButton');
    const rawrButton = document.getElementById('rawrButton');
    const showWhatButton = document.getElementById('showWhatButton');
    const yesTextButton = document.getElementById('yesTextButton');
    const noTextButton = document.getElementById('noTextButton');
    const continueButton = document.getElementById('continueButton');
    const continueStoryButton = document.getElementById('continueStoryButton');
    const thePastText = document.getElementById('thePastText');
    const storyText = document.querySelector('.story-text');

    yesButton.addEventListener('click', function() {
        mainContent.classList.add('hidden');
        options.classList.remove('hidden');
        document.querySelectorAll('#options .animated-text, #options .animated-button').forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
        });
    });

    rawrButton.addEventListener('click', function() {
        options.classList.add('hidden');
        showSomething.classList.remove('hidden');
        document.querySelectorAll('#show-something .animated-text, #show-something .animated-button').forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
        });
    });

    showWhatButton.addEventListener('click', function() {
        showSomething.classList.add('hidden');
        ask.classList.remove('hidden');
        document.querySelectorAll('#ask .animated-text, #ask .animated-button').forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
        });
    });

    yesTextButton.addEventListener('click', function() {
        ask.classList.add('hidden');
        showContent.classList.remove('hidden');
        document.getElementById('initialMessage').textContent = 'Okeh, ini dia.';
        document.querySelectorAll('#show-content .animated-text, #show-content .animated-button').forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
        });
        continueButton.classList.remove('hidden'); // Tampilkan tombol "Lanjut"
    });

    noTextButton.addEventListener('click', function() {
        ask.classList.add('hidden');
        showContent.classList.remove('hidden');
        document.getElementById('initialMessage').textContent = 'Yah mengsedih. Tapi tetep kupaksa kamu lihat hehe.';
        document.querySelectorAll('#show-content .animated-text, #show-content .animated-button').forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
        });
        continueButton.classList.remove('hidden'); // Tampilkan tombol "Lanjut"
    });

    continueButton.addEventListener('click', function() {
        showContent.classList.add('hidden');
        storyIntro.classList.remove('hidden');
        thePastText.classList.add('enlarge-and-shrink');

        setTimeout(function() {
            continueStoryButton.classList.remove('hidden');
        }, 5000); // Menampilkan tombol "Lanjut" setelah 5 detik

        continueStoryButton.addEventListener('click', function() {
            storyIntro.classList.add('hidden');
            storyText.classList.add('visible');
            story.classList.remove('hidden');
            thePastText.classList.remove('enlarge-and-shrink');
            thePastText.classList.add('hidden');

            // Menambahkan tulisan "The Past" di header
            const header = document.createElement('div');
            header.classList.add('story-header');
            header.innerHTML = '<p id="thePastText" class="animated-text the-past-text">The Past</p>';
            document.body.insertBefore(header, document.getElementById('story'));

            // Animasi fade in untuk teks cerita
            setTimeout(function() {
                storyText.classList.add('visible');
            }, 500); // Delay 0.5 detik sebelum memunculkan teks cerita
        }, { once: true });

        audio.play();
    });

    // Play audio on page load
    window.addEventListener('load', function() {
        audio.play();
    });

    // Tampilkan tombol "Lanjut" setelah animasi teks "Okeh, ini dia." selesai
    showContent.addEventListener('animationend', function() {
        continueButton.classList.remove('hidden');
    });
});
