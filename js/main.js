// ==========================================
// 1. SCROLL E INTERACCIÓN DE ENLACES
// ==========================================

// Función para desplazamiento suave a cualquier ancla.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
            
            const navLinks = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger-menu');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
});

// ==========================================
// 2. LÓGICA DE SCROLL (ACTIVACIÓN DE LINKS Y SOMBRA DE NAVBAR)
// ==========================================

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    let current = '';
    const scrollYPosition = window.scrollY;
    
    document.querySelectorAll('section').forEach(section => {
        const offset = 150; 
        const sectionTop = section.offsetTop - offset;
        
        if (scrollYPosition >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


// ==========================================
// 3. ANIMACIÓN DE ENTRADA AL HACER SCROLL (Intersection Observer)
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px' 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);


// ==========================================
// 4. LÓGICA DEL MENÚ MÓVIL Y LISTENERS DE CARGA
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    const animatedElements = document.querySelectorAll(
        '.skill-card, .project-card, .about-content, .section-header, .highlight-card, .social-link'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    const circularFrame = document.querySelector('.circular-frame');
    
    if (circularFrame) {
    
         circularFrame.addEventListener('click', () => {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        });
    }
});