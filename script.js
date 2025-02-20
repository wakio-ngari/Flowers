document.addEventListener("DOMContentLoaded", () => {
    const petalsContainer = document.querySelector(".petals");
    const music = document.getElementById("bg-music");
    const musicButton = document.getElementById("toggle-music");

    function createPetal() {
        const petal = document.createElement("div");
        petal.classList.add("petal");

        const flowers = ["🌸", "🌼", "❤️","🌺", "❄️", "💮", "💙"];
        petal.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

        
        petal.style.left = `${Math.random() * 100}vw`;

    
        petal.style.fontSize = `${Math.random() * 1.5 + 1.5}rem`;

       
        const duration = Math.random() * 3 + 5;
        petal.style.animation = `fall ${duration}s linear forwards, sway 3s ease-in-out alternate`;

        petalsContainer.appendChild(petal);

    
        setTimeout(() => {
            petal.remove();
        }, duration * 1000);
    }

  
    setInterval(createPetal, 1000); 

    musicButton.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            musicButton.textContent = "⏸ Pause";
        } else {
            music.pause();
            musicButton.textContent = "🎵 Play Me";
        }
    });
});
