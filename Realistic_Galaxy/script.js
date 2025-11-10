const galaxy = document.querySelector(".galaxy");

const numStar = 100;
const colors = ['#ffffff', '#a0c4ff', '#ffd6a5', '#ffadad'];

for (let i = 0; i < numStar; i++ ) {
    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.background = colors[Math.floor(Math.random() * colors.length)];
    star.style.boxShadow = `0 0 ${4 + size * 3}px ${star.style.background}`;

    galaxy.appendChild(star);

    const radius = 40 + Math.random() * 300;
    const angle = Math.random() * 2 * Math.PI;
    const speed = 0.0005 + Math.random() * 0.001;

    let x = 0; y = 0;

    function animateStar(timestamp) {
        const t = timestamp * speed + angle;

        // Elliptical Orbit
        x = window.innerWidth / 2 + Math.cos(t) * radius;
        y = window.innerHeight / 2 - Math.sin(t) * radius * 0.6;

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        requestAnimationFrame(animateStar);
    }
    
    requestAnimationFrame(animateStar);
}