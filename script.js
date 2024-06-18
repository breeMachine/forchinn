document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    const options = document.getElementById('options');
    const text = document.getElementById('text');
    const story = document.getElementById('story');
    const audio = document.getElementById('audio');
    
    mainContent.addEventListener('click', function() {
        mainContent.classList.add('hidden');
        options.classList.remove('hidden');
        document.querySelectorAll('#options .animated-text').forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
        });
    });

    options.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'showTextButton') {
            options.classList.add('hidden');
            text.classList.remove('hidden');
            document.querySelectorAll('#text .animated-text').forEach((element, index) => {
                element.style.animationDelay = `${index * 0.2}s`;
            });
        }
    });

    text.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'yesTextButton') {
            text.classList.add('hidden');
            story.innerHTML = `<p class="animated-text">Oke ini dia.</p><p class="animated-text">The Past, The Love, The Memories. Cerita panjang...</p>`;
            story.classList.remove('hidden');
            audio.play();
        }
        if (e.target && e.target.id === 'noTextButton') {
            text.classList.add('hidden');
            story.innerHTML = `<p class="animated-text">Yah, mengsedih. Tapi tetap kupaksa kamu lihat hehe.</p><p class="animated-text">The Past, The Love, The Memories. Cerita panjang...</p>`;
            story.classList.remove('hidden');
            audio.play();
        }
    });
});
