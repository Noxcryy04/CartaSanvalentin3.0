document.querySelector('.card').addEventListener('click', () => {
    document.querySelector('.card').classList.toggle('flipped');
});

function createMovingParticles() {
    const particleBackground = document.querySelector('.particle-background');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = `${Math.random() * 20 + 10}px`;
        particle.style.height = particle.style.width;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
        particleBackground.appendChild(particle);
    }
}

function updateCounter() {
    const startDate = new Date('2022-10-02T00:00:00');
    const now = new Date();
    const diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

    document.getElementById('counter').innerHTML = `
        <div>${years} años</div>
        <div>${months} meses</div>
        <div>${days} días</div>
    `;
}

document.getElementById('show-counter').addEventListener('click', () => {
    document.getElementById('counter').style.display = 'block';
    updateCounter();
    setInterval(updateCounter, 1000);
});

createMovingParticles();
