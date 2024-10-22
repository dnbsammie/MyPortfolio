document.addEventListener("DOMContentLoaded", function () {
    // SineWave
    const canvas = document.getElementById('waveCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const waves = [];
    const waveCount = 7;
    const colors = ['#ffd1a1', '#ffb266 ', '#ff9c33', '#ff9a00', '#ff7f00', '#e66a00', '#ff7f00', '#ff8000'];

    for (let i = 0; i < waveCount; i++) {
        waves.push({
            frequency: 0.01 + (i * 0.01),
            amplitude: 20 + (i * 6),
            phase: Math.random() * Math.PI * 2,
            color: colors[i % colors.length]
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        waves.forEach((wave) => {
            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2 + Math.sin(wave.phase) * wave.amplitude);

            for (let x = 0; x < canvas.width; x++) {
                const y = canvas.height / 2 + Math.sin(x * wave.frequency + wave.phase) * wave.amplitude;
                ctx.lineTo(x, y);
            }

            ctx.strokeStyle = wave.color;
            ctx.lineWidth = 2;
            ctx.stroke();
            wave.phase -= 0.1;
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Gallery
    const images = document.querySelectorAll(".gallery img");
    const projectNumber = document.getElementById("project-number");
    const projectTitle = document.getElementById("project-title");
    const projectDescription = document.getElementById("project-description");

    function activateProject(img) {
        images.forEach((img) => {
            img.style.width = "0px";
            img.style.opacity = ".9";
            img.style.filter = "grayscale(90%)";
        });

        img.style.width = "25%";
        img.style.opacity = "1";
        img.style.filter = "contrast(125%)";

        const info = JSON.parse(img.getAttribute("data-info"));
        updateTextInfo(info);
    }

    activateProject(images[0]);

    images.forEach((img) => {
        img.addEventListener("click", () => {
            activateProject(img);
        });
    });

    function updateTextInfo(info) {
        projectNumber.textContent = info.number;
        projectTitle.textContent = info.title;
        projectDescription.textContent = info.description;
    }
});
