document.addEventListener('DOMContentLoaded', function() {
    
    // 1. ANIMACIÓN AL SCROLLEAR (Intersection Observer)
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; // Distancia desde abajo para activar

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            } else {
                // Opcional: Si quieres que desaparezcan al subir, descomenta esto:
                 reveal.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Disparar una vez al inicio para mostrar la portada
    revealOnScroll();


    // 2. REPRODUCTOR DE MÚSICA
    const audio = document.getElementById('wedding-music');
    const playBtn = document.getElementById('play-btn');
    const icon = playBtn.querySelector('i');
    let isPlaying = false;

    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-music');
        } else {
            audio.play();
            icon.classList.remove('fa-music');
            icon.classList.add('fa-pause');
        }
        isPlaying = !isPlaying;
    });

});