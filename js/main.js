// Archivo js/main.js
// Contiene toda la lógica: Scroll Suave, Activación de Menú, Animaciones y Menú Móvil

// ==========================================
// 1. SCROLL E INTERACCIÓN DE ENLACES
// ==========================================

// Función para desplazamiento suave a cualquier ancla.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            // Desplazamiento suave al elemento objetivo
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
            
            // Cierra el menú móvil si está abierto después de hacer clic en un enlace
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
    // --- Lógica de Sombra de Navbar ---
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        // Añade una pequeña sombra cuando se hace scroll
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        // Quita la sombra al volver al inicio
        navbar.style.boxShadow = 'none';
    }

    // --- Lógica de Link Activo ---
    let current = '';
    const scrollYPosition = window.scrollY;
    
    // Obtener todas las secciones
    document.querySelectorAll('section').forEach(section => {
        // Usamos un offset para que la activación ocurra un poco antes de llegar a la sección
        const offset = 150; 
        const sectionTop = section.offsetTop - offset;
        
        // Si la posición de scroll está dentro de la sección
        if (scrollYPosition >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    // Remover y agregar la clase 'active'
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
    // Cuando el 10% del elemento es visible, se dispara.
    threshold: 0.1,
    // La animación se activa 100px antes de que el elemento entre en el viewport
    rootMargin: '0px 0px -100px 0px' 
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            // Dejar de observar después de la animación
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

    // --- Menú Hamburguesa Toggle ---
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // --- Aplicar Animaciones de Entrada ---
    const animatedElements = document.querySelectorAll(
        '.skill-card, .project-card, .about-content, .section-header, .highlight-card, .social-link'
    );
    
    // Configurar estado inicial para las animaciones
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // --- Funcionalidad del Círculo "Explora" ---
    const circularFrame = document.querySelector('.circular-frame');
    
    if (circularFrame) {
        // En este caso, no necesitamos listeners 'click' o 'hover' aquí, 
        // ya que el smooth scroll se encarga del 'click' (a[href="#about"])
        // y los estilos hover están definidos en CSS. Solo asegúrate que es un <a>
        // o darle la funcionalidad explícitamente aquí si fuera necesario.
        // Dado que el HTML no lo tiene como <a>, lo agregamos aquí:
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