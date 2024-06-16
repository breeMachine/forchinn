document.addEventListener('DOMContentLoaded', function() {
    const continueButton = document.getElementById('continueButton');
    const mainContent = document.getElementById('main-content');
    const options = document.getElementById('options');
    const roarButton = document.getElementById('roarButton');
    const video = document.getElementById('video');
    const youtubeVideo = document.getElementById('youtubeVideo');

    // Set the YouTube video URL
    youtubeVideo.src = 'https://youtu.be/kovS1JTrOYQ?si=x906f7f5czvFDqnK';

    continueButton.addEventListener('click', function() {
        mainContent.classList.add('hidden');
        options.classList.remove('hidden');
        document.querySelectorAll('#options .animated-text').forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
        });
    });

    roarButton.addEventListener('click', function() {
        options.classList.add('hidden');
        mainContent.classList.remove('hidden');
    });

    document.querySelectorAll('#main-content .animated-text').forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });
});
