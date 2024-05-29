window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.Link');
    const firstLink = links[0];

    // Agregar un solo event listener al primer enlace
    firstLink.addEventListener('click', () => {
        console.log("a")
        smoothScroll('#seccion-sobre-mi', 500, 86); // Utiliza el valor de compensación adecuado
    });
});

const smoothScroll = (target, duration, offset) => {
    console.log("b")
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top - offset;
    const startPosition = window.pageYOffset;
    const startTime = null;

    const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
};

const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
};