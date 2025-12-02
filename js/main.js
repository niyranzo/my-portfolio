// ==========================================
// SMOOTH SCROLL PARA NAVEGACIÓN
// ==========================================

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

// ==========================================
// ACTIVAR LINK DEL NAV AL HACER SCROLL
// ==========================================

window.addEventListener('scroll', () => {
    let current = '';
    
    // Obtener todas las secciones
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Si el scroll está dentro de la sección
        if (scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    // Remover la clase active de todos los links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        
        // Agregar la clase active al link correspondiente
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// ANIMACIÓN DE ENTRADA PARA ELEMENTOS
// ==========================================

// Observador de intersección para animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animaciones a las tarjetas al cargar
window.addEventListener('DOMContentLoaded', () => {
    // Elementos a animar
    const animatedElements = document.querySelectorAll(
        '.skill-card, .project-card, .about-content, .section-header'
    );
    
    // Configurar estado inicial
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ==========================================
// NAVBAR TRANSPARENTE AL INICIO
// ==========================================

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});