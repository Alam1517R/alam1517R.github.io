//Carrusel de imagenes
let currentIndex = 0;
    
function moveSlide(step) {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    const totalImages = images.length;

    currentIndex = (currentIndex + step + totalImages) % totalImages;
    const translateX = -currentIndex * 100 + '%';
    carousel.style.transform = 'translateX(' + translateX + ')';
}

// Cambio automático cada 5 segundos
setInterval(() => moveSlide(1), 5000);

//Principal
document.getElementById("scrollBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el salto inmediato
    const target = document.getElementById("itinerario"); // Sección destino
    const startPosition = window.pageYOffset; // Posición actual
    const targetPosition = target.getBoundingClientRect().top + startPosition; // Posición final
    const distance = targetPosition - startPosition; // Distancia total
    const duration = 2000; // 30 segundos (30000 ms)
    let startTime = null;

    function scrollAnimation(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const easeInOutQuad = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        window.scrollTo(0, easeInOutQuad(elapsedTime, startPosition, distance, duration));

        if (elapsedTime < duration) {
            requestAnimationFrame(scrollAnimation);
        } else {
            window.scrollTo(0, targetPosition);
        }
    }

    requestAnimationFrame(scrollAnimation);
});

//Animacion dia 1 al 5
document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");

    function checkBoxes() {
        const triggerBottom = window.innerHeight * 0.9;

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                box.style.opacity = "1";
                box.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", checkBoxes);
    checkBoxes(); // Llamada inicial para verificar si ya hay elementos visibles
});

document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");

    function showOnScroll() {
        boxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (boxTop < windowHeight - 100) {
                box.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showOnScroll);
    showOnScroll();
});
