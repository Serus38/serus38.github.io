// Elementos del DOM
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const moreInfoBtn = document.getElementById('moreInfoBtn');
const additionalInfo = document.getElementById('additionalInfo');
const aboutImageContainer = document.querySelector('.about-image');
const aboutImageImg = document.querySelector('.about-image img');
const scrollToTopBtn = document.getElementById('scrollToTop');
const langEsBtn = document.getElementById('langEs');
const langEnBtn = document.getElementById('langEn');

const translations = {
    es: {
        htmlLang: 'es',
        logo: 'Mi Portafolio',
        nav: ['Inicio', 'Acerca de', 'Proyectos', 'Contacto'],
        heroTitle: 'Desarrollador <span class="highlight">Full Stack</span>',
        heroSubtitle: 'Desarrollador Web | Game Developer | Analista de datos',
        heroDescription: 'Desarrollador de software enfocado en la arquitectura y construcción de aplicaciones multiplataforma. Me apasiona traducir retos de negocio en código eficiente.',
        heroButtons: ['VER PROYECTOS', 'DESCARGAR CV'],
        contactLabels: ['CORREO', 'TELÉFONO'],
        aboutTitle: 'Acerca de Mí',
        aboutDescription: 'Soy Desarrollador de Software Junior, enfocado en desarrollo web y backend. Trabajo principalmente con Java, con conocimientos en HTML, CSS y JavaScript, y experiencia en la creación de APIs REST. Me caracterizo por ser una persona proactiva, responsable y orientada al trabajo en equipo, con alta capacidad de aprendizaje y adaptación a nuevas tecnologías. Tengo experiencia trabajando bajo metodologías ágiles (SCRUM). Mi objetivo es consolidarme como desarrollador de software y aportar valor en proyectos tecnológicos y servicios web.',
        moreInfo: 'Más información',
        viewImage: 'Ver imagen',
        techMainTitle: 'Tecnologías Principales',
        techCategoryTitles: [
            'Lenguajes y Desarrollo Web',
            'Backend, Datos y Análisis',
            'Desarrollo Móvil y Otros',
            'Metodologías y Herramientas'
        ],
        techItems: [
            'Java con Spring Boot',
            'HTML · CSS · JavaScript',
            'APIs REST',
            'SQL Server',
            'Power BI · Excel · SharePoint',
            'Android Studio',
            'Unity',
            'SCRUM / Metodologías ágiles',
            'Azure DevOps',
            'Smartsheet',
            'Ecosistema Microsoft (trabajo colaborativo y remoto)'
        ],
        projectsTitle: 'Mis Proyectos',
        projectNames: ['Proyecto 1', 'Proyecto 2', 'Proyecto 3'],
        projectDescription: 'Descripción breve del proyecto.',
        projectLink: 'Ver más →',
        contactTitle: 'Ponte en Contacto',
        placeholders: ['Tu nombre', 'Tu email', 'Tu mensaje'],
        submitButton: 'Enviar Mensaje',
        footerText: '© 2026 Mi Portafolio. Todos los derechos reservados.',
        formAlert: '¡Gracias por tu mensaje! Me pondré en contacto pronto.'
    },
    en: {
        htmlLang: 'en',
        logo: 'My Portfolio',
        nav: ['Home', 'About', 'Projects', 'Contact'],
        heroTitle: 'Software <span class="highlight">Developer</span>',
        heroSubtitle: 'Web Developer | Game Developer | Data Analyst',
        heroDescription: 'Software developer focused on architecture and cross-platform application development. I am passionate about translating business challenges into efficient code.',
        heroButtons: ['VIEW PROJECTS', 'DOWNLOAD CV'],
        contactLabels: ['EMAIL', 'PHONE'],
        aboutTitle: 'About Me',
        aboutDescription: 'I am a Junior Software Developer focused on web and backend development. I mainly work with Java, with knowledge of HTML, CSS and JavaScript, and experience building REST APIs. I am a proactive and responsible person, team-oriented, with strong learning skills and adaptability to new technologies. I have experience working with agile methodologies (SCRUM). My goal is to grow as a software developer and deliver value in technology projects and web services.',
        moreInfo: 'More information',
        viewImage: 'View image',
        techMainTitle: 'Core Technologies',
        techCategoryTitles: [
            'Languages and Web Development',
            'Backend, Data and Analytics',
            'Mobile Development and Others',
            'Methodologies and Tools'
        ],
        techItems: [
            'Java with Spring Boot',
            'HTML · CSS · JavaScript',
            'REST APIs',
            'SQL Server',
            'Power BI · Excel · SharePoint',
            'Android Studio',
            'Unity',
            'SCRUM / Agile methodologies',
            'Azure DevOps',
            'Smartsheet',
            'Microsoft ecosystem (collaborative and remote work)'
        ],
        projectsTitle: 'My Projects',
        projectNames: ['Project 1', 'Project 2', 'Project 3'],
        projectDescription: 'Brief project description.',
        projectLink: 'See more →',
        contactTitle: 'Get in Touch',
        placeholders: ['Your name', 'Your email', 'Your message'],
        submitButton: 'Send Message',
        footerText: '© 2026 My Portfolio. All rights reserved.',
        formAlert: 'Thanks for your message! I will get back to you soon.'
    }
};

let currentLang = localStorage.getItem('portfolioLang') || 'es';

function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = value;
    }
}

function setHtml(selector, value) {
    const element = document.querySelector(selector);
    if (element) {
        element.innerHTML = value;
    }
}

function applyLanguage(lang) {
    const t = translations[lang];
    if (!t) {
        return;
    }

    currentLang = lang;
    document.documentElement.lang = t.htmlLang;
    localStorage.setItem('portfolioLang', lang);

    if (langEsBtn && langEnBtn) {
        langEsBtn.classList.toggle('active', lang === 'es');
        langEnBtn.classList.toggle('active', lang === 'en');
    }

    setText('.logo', t.logo);
    setHtml('.hero-content h1', t.heroTitle);
    setText('.hero-subtitle', t.heroSubtitle);
    setText('.hero-description', t.heroDescription);
    setText('#about h2', t.aboutTitle);
    setText('.about-text p', t.aboutDescription);
    setText('.tech-section h3', t.techMainTitle);
    setText('#proyectos h2', t.projectsTitle);
    setText('#contacto h2', t.contactTitle);
    setText('.submit-button', t.submitButton);
    setText('.footer-content p', t.footerText);

    if (moreInfoBtn && aboutImageContainer) {
        moreInfoBtn.textContent = aboutImageContainer.classList.contains('show-info') ? t.viewImage : t.moreInfo;
    }

    navLinks.forEach((link, index) => {
        if (t.nav[index]) {
            link.textContent = t.nav[index];
        }
    });

    document.querySelectorAll('.hero-buttons .cta-button').forEach((button, index) => {
        if (t.heroButtons[index]) {
            button.textContent = t.heroButtons[index];
        }
    });

    document.querySelectorAll('.contact-label').forEach((label, index) => {
        if (t.contactLabels[index]) {
            label.textContent = t.contactLabels[index];
        }
    });

    document.querySelectorAll('.tech-category h4').forEach((heading, index) => {
        if (t.techCategoryTitles[index]) {
            heading.textContent = t.techCategoryTitles[index];
        }
    });

    document.querySelectorAll('.tech-category li').forEach((item, index) => {
        if (t.techItems[index]) {
            item.textContent = t.techItems[index];
        }
    });

    document.querySelectorAll('.project-card h3').forEach((title, index) => {
        if (t.projectNames[index]) {
            title.textContent = t.projectNames[index];
        }
    });

    document.querySelectorAll('.project-card p').forEach((desc) => {
        desc.textContent = t.projectDescription;
    });

    document.querySelectorAll('.project-link').forEach((link) => {
        link.textContent = t.projectLink;
    });

    const formInputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
    formInputs.forEach((field, index) => {
        if (t.placeholders[index]) {
            field.placeholder = t.placeholders[index];
        }
    });
}

// Toggle del menú hamburguesa
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
    });
}

// Cerrar menú al hacer clic en un enlace (solo en móvil)
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (isMobile() && navMenu && hamburger) {
            navMenu.style.display = 'none';
            hamburger.classList.remove('active');
        }
    });
});

// Selector de idioma
if (langEsBtn && langEnBtn) {
    langEsBtn.addEventListener('click', () => applyLanguage('es'));
    langEnBtn.addEventListener('click', () => applyLanguage('en'));
}

// Manejar el envío del formulario de contacto
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert(translations[currentLang].formAlert);
        contactForm.reset();
    });
}

// Mostrar información adicional con desvanecimiento en "Acerca de"
if (moreInfoBtn && additionalInfo && aboutImageContainer && aboutImageImg) {
    moreInfoBtn.addEventListener('click', () => {
        const isShowingInfo = aboutImageContainer.classList.toggle('show-info');
        moreInfoBtn.textContent = isShowingInfo ? translations[currentLang].viewImage : translations[currentLang].moreInfo;
    });
}

// Efecto de scroll suave
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
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
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.opacity = '1';
            observer.unobserve(img);
        }
    });
});

document.querySelectorAll('img').forEach((img) => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.3s ease';
    imageObserver.observe(img);
});

// Función para detectar si estamos en dispositivo móvil
function isMobile() {
    return window.innerWidth <= 768;
}

// Botón Scroll to Top
window.addEventListener('scroll', () => {
    if (!scrollToTopBtn) {
        return;
    }
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Ajustar menú al redimensionar
window.addEventListener('resize', () => {
    if (!navMenu) {
        return;
    }
    if (!isMobile()) {
        navMenu.style.display = 'flex';
    } else {
        navMenu.style.display = 'none';
    }
});

applyLanguage(currentLang);

console.log('Script cargado correctamente');
