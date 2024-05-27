window.onload = () => {
    let links = document.querySelectorAll('.Link');
    
    // Añadimos eventos de click a cada link
    links.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
            scrollSuave(link.getAttribute('href'), 500, 78);
        });
    });
};

const scrollSuave = (objetivo, duracion, compensacion) => {
    let elemObj = document.querySelector(objetivo);
    let elemPos = elemObj.getBoundingClientRect().top - compensacion;
    let posInicial = window.pageYOffset;
    let tiempoInicial = null;

    const animacion = tiempoAhora => {
        if (tiempoInicial === null) tiempoInicial = tiempoAhora;
        let tiempoPasado = tiempoAhora - tiempoInicial;
        let auxAnimacion = easeInOutQuad(tiempoPasado, posInicial, elemPos, duracion);
        window.scrollTo(0, auxAnimacion);
        if (tiempoPasado < duracion) requestAnimationFrame(animacion);
    };

    requestAnimationFrame(animacion);
};

const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};

/* const links = document.querySelectorAll('.Link');
links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const targetPosition = targetElement.getBoundingClientRect().top;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const targetId = '#seccion-inicio';
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.getBoundingClientRect().top;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
});
 */