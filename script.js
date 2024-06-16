document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    const options = document.getElementById('options');
    const yesButton = document.getElementById('yesButton');
    const rawrButton = document.getElementById('rawrButton');
    const video = document.getElementById('video');
    const youtubeVideo = document.getElementById('youtubeVideo');
    const videoTitle = document.getElementById('videoTitle');

    // Fungsi untuk menampilkan pesan error
    function showError(message) {
        console.error(message);
        alert(message); // Ini contoh sederhana, bisa diganti dengan cara yang lebih elegan
    }

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
            <button id="watchButton" class="animated-text">Apa tuh?</button>`;
        mainContent.classList.remove('hidden');
        document.querySelectorAll('#main-content .animated-text').forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
        });
    });

    document.addEventListener('click', function(e) {
        if (e.target && e.target.id == 'watchButton') {
            mainContent.classList.add('hidden');
            options.innerHTML = `<p class="animated-text">Tenang, bukan hal yang cabul kok. Mau liat gak?</p>
                <button id="yesVideoButton" class="animated-text">Mauuu</button>
                <button id="noVideoButton" class="animated-text">Gak</button>`;
            options.classList.remove('hidden');
            document.querySelectorAll('#options .animated-text').forEach((element, index) => {
                element.style.animationDelay = `${index * 0.2}s`;
            });
        }
    });

    document.addEventListener('click', function(e) {
        if (e.target && e.target.id == 'yesVideoButton') {
            options.classList.add('hidden');
            video.classList.remove('hidden');
            videoTitle.innerHTML = "Okeee ini dia.";
            videoTitle.classList.add('animated-text');
            // Mengatur video YouTube
            const videoUrl = "https://www.youtube.com/embed/kovS1JTrOYQ";
            if (youtubeVideo) {
                youtubeVideo.src = videoUrl;
                youtubeVideo.onerror = function() {
                    showError("Gagal memuat video. Pastikan koneksi internet Anda stabil atau coba lagi nanti.");
                };
            } else {
                showError("Elemen video tidak ditemukan.");
            }
        }
        if (e.target && e.target.id == 'noVideoButton') {
            options.classList.add('hidden');
            mainContent.innerHTML = `<h1 class="animated-text">Yah, mengsedih. Tapi tetep kupaksa kamu liat hehe.</h1>`;
            mainContent.classList.remove('hidden');
            document.querySelectorAll('#main-content .animated-text').forEach((element, index) => {
                element.style.animationDelay = `${index * 0.2}s`;
            });
            video.classList.remove('hidden');
            videoTitle.classList.add('animated-text');
            // Mengatur video YouTube
            const videoUrl = "https://www.youtube.com/embed/kovS1JTrOYQ";
            if (youtubeVideo) {
                youtubeVideo.src = videoUrl;
                youtubeVideo.onerror = function() {
                    showError("Gagal memuat video. Pastikan koneksi internet Anda stabil atau coba lagi nanti.");
                };
            } else {
                showError("Elemen video tidak ditemukan.");
            }
        }
    });

});
