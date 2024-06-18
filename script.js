document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    const options = document.getElementById('options');
    const reveal = document.getElementById('reveal');
    const revealButton = document.getElementById('revealButton');
    const question = document.getElementById('question');
    const yesVideoButton = document.getElementById('yesVideoButton');
    const noVideoButton = document.getElementById('noVideoButton');
    const storyContainer = document.getElementById('story');
    const storyTitle = document.getElementById('storyTitle');
    const storyText = document.getElementById('storyText');
    const continueButton = document.getElementById('continueButton');
    const audioContainer = document.getElementById('audio');

    mainContent.addEventListener('click', function() {
        mainContent.classList.add('hidden');
        options.classList.remove('hidden');
        document.querySelectorAll('#options .animated-text').forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
        });
    });

    revealButton.addEventListener('click', function() {
        reveal.classList.add('hidden');
        question.classList.remove('hidden');
        document.querySelectorAll('#question .animated-text').forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
        });
    });

    yesVideoButton.addEventListener('click', function() {
        question.classList.add('hidden');
        storyContainer.classList.remove('hidden');
        storyTitle.classList.add('animated-text');
        storyText.innerHTML = `Oke ini dia.<br><br>The Past, The Love, The Memories`;
        storyText.classList.add('animated-text');
        continueButton.classList.remove('hidden');
        continueButton.classList.add('animated-text');

        // Play audio
        audioContainer.play();
    });

    noVideoButton.addEventListener('click', function() {
        question.classList.add('hidden');
        storyContainer.classList.remove('hidden');
        storyText.innerHTML = `Yah, mengsedih. Tapi aku tetap paksa kamu liat hehe.<br><br>The Past, The Love, The Memories`;
        storyText.classList.add('animated-text');
        continueButton.classList.remove('hidden');
        continueButton.classList.add('animated-text');

        // Play audio
        audioContainer.play();
    });

    continueButton.addEventListener('click', function() {
        storyContainer.classList.add('hidden');
    });

});
