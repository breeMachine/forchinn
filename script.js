document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    const options = document.getElementById('options');
    const yesButton = document.getElementById('yesButton');
    const rawrButton = document.getElementById('rawrButton');
    const story = document.getElementById('story');
    const continueButton = document.getElementById('continueButton');
    const narrative = document.getElementById('narrative');
    const storyText = document.getElementById('storyText');

    mainContent.addEventListener('click', function() {
        mainContent.classList.add('hidden');
        options.classList.remove('hidden');
        document.querySelectorAll('#options .animated-text').forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
        });
    });

    rawrButton.addEventListener('click', function() {
        options.classList.add('hidden');
        story.innerHTML = `<h1 id="storyTitle" class="story-title animated-text">The Past, The Love, The Memories</h1>
            <button id="continueButton" class="animated-text">Lanjut</button>`;
        story.classList.remove('hidden');
        document.querySelectorAll('#story .animated-text').forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
        });
    });

    continueButton.addEventListener('click', function() {
        story.classList.add('hidden');
        narrative.innerHTML = `<p id="storyText" class="story-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac augue ac felis commodo convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin bibendum sapien ac sem venenatis, eget tristique tortor vestibulum. Suspendisse potenti. Quisque sit amet aliquet magna. In congue mauris non risus feugiat, at elementum sem scelerisque. Duis et pellentesque nisi. In eleifend lectus non magna ultricies, in consectetur ex lacinia. Vestibulum eleifend mi at efficitur iaculis. Ut a ex consequat, malesuada sem in, tempus mauris. Donec vel urna non dolor auctor congue. Nullam tincidunt, risus a vehicula elementum, nunc libero sodales sapien, sit amet semper est nunc at ligula. Ut vitae gravida dui.</p>`;
        narrative.classList.remove('hidden');
        animateStoryText();
    });

    function animateStoryText() {
        const text = storyText.innerHTML.trim().split(" ");
        storyText.innerHTML = "";
        text.forEach((word, index) => {
            setTimeout(() => {
                storyText.innerHTML += word + " ";
            }, index * 100);
        });
    }

});
