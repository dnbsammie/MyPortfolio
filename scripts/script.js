document.addEventListener("DOMContentLoaded", function () {
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