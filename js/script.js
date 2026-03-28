// Elementos del DOM
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const moreInfoBtn = document.getElementById('moreInfoBtn');
const additionalInfo = document.getElementById('additionalInfo');
const aboutImageContainer = document.querySelector('.about-image');
const aboutImageImg = document.querySelector('.about-image img');

// Toggle del menú hamburguesa
hamburger.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    hamburger.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace (solo en móvil)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (isMobile()) {
            navMenu.style.display = 'none';
            hamburger.classList.remove('active');
        }
    });
});

// Manejar el envío del formulario de contacto
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Aquí puedes añadir lógica para enviar el formulario
    alert('¡Gracias por tu mensaje! Me pondré en contacto pronto.');
    contactForm.reset();
});

// Mostrar información adicional con desvanecimiento en "Acerca de"
if (moreInfoBtn && additionalInfo && aboutImageContainer && aboutImageImg) {
    moreInfoBtn.addEventListener('click', () => {
        const isShowingInfo = aboutImageContainer.classList.toggle('show-info');
        moreInfoBtn.textContent = isShowingInfo ? 'Ver imagen' : 'Más información';
    });
}

// Efecto de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Lazy loading de imágenes
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '1';
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img').forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
    imageObserver.observe(img);
});

// Función para detectar si estamos en dispositivo móvil
function isMobile() {
    return window.innerWidth <= 768;
}

// Ajustar menú al redimensionar
window.addEventListener('resize', () => {
    if (!isMobile()) {
        navMenu.style.display = 'flex';
    } else {
        navMenu.style.display = 'none';
    }
});

console.log('Script cargado correctamente');
