document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".floating-lights");
    const particleCount = 50;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
        const light = document.createElement("span");
        const size = Math.random() * 6 + 4;
        light.style.width = size + "px";
        light.style.height = size + "px";
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        const angle = Math.random() * 2 * Math.PI;
        const speed = 0.2 + Math.random() * 0.2;
        const speedX = Math.cos(angle) * speed;
        const speedY = Math.sin(angle) * speed;
        container.appendChild(light);
        particles.push({ el: light, x, y, speedX, speedY });
        light.style.transform = `translate(${x}px, ${y}px)`;
    }

    function animate() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0) { p.x = 0; p.speedX *= -1; }
            if (p.x > width - 5) { p.x = width - 5; p.speedX *= -1; }
            if (p.y < 0) { p.y = 0; p.speedY *= -1; }
            if (p.y > height - 5) { p.y = height - 5; p.speedY *= -1; }

            p.el.style.transform = `translate(${p.x}px, ${p.y}px)`;
        });

        requestAnimationFrame(animate);
    }

    animate();
});
