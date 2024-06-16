document.addEventListener('DOMContentLoaded', function() {
    const clickButton = document.getElementById('clickButton');
    const mainContent = document.getElementById('main-content');
    const options = document.getElementById('options');
    const watchButton = document.getElementById('watchButton');
    const noButton = document.getElementById('noButton');
    const video = document.getElementById('video');
    const youtubeVideo = document.getElementById('youtubeVideo');

    clickButton.addEventListener('click', function() {
        mainContent.classList.add('hidden');
        options.classList.remove('hidden');
    });

    watchButton.addEventListener('click', function() {
        options.classList.add('hidden');
        video.classList.remove('hidden');
        youtubeVideo.src = "https://www.youtube.com/embed/your_video_id";
    });

    noButton.addEventListener('click', function() {
        options.classList.add('hidden');
        alert('Oke, mungkin lain kali!');
    });
});