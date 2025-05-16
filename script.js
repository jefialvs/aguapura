document.addEventListener('DOMContentLoaded', function() {
    // =============================================
    // EFEITOS PARA OS BADGES (35+ e 1988)
    // =============================================
    const badges = document.querySelectorAll('.experience-badge, .badge-experience');
    
    badges.forEach(badge => {
        // Efeito de flutuação sutil
        badge.style.transition = 'transform 0.3s ease';
        
        badge.addEventListener('mouseenter', () => {
            badge.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        badge.addEventListener('mouseleave', () => {
            badge.style.transform = 'scale(1) rotate(0)';
        });
    });

    // =============================================
    // MENU RESPONSIVO
    // =============================================
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mainNav = document.querySelector('.main-nav');
    
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // =============================================
    // HEADER SCROLL (REMOVIDA A ALTERAÇÃO DA LOGO)
    // =============================================
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // =============================================
    // SLIDER HERO
    // =============================================
    const slides = document.querySelectorAll('.hero-slider .slide');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Troca de slide a cada 5 segundos
    setInterval(nextSlide, 5000);

    // =============================================
    // ANIMAÇÕES COM AOS
    // =============================================
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // =============================================
    // WHATSAPP FLOAT
    // =============================================
    const whatsappBtn = document.querySelector('.float-whatsapp-btn');
    const whatsappContainer = document.querySelector('.float-whatsapp-container');
    
    whatsappContainer.addEventListener('mouseenter', () => {
        document.querySelector('.contact-options').style.opacity = '1';
        document.querySelector('.contact-options').style.visibility = 'visible';
        document.querySelector('.contact-options').style.transform = 'translateY(0)';
    });
    
    whatsappContainer.addEventListener('mouseleave', () => {
        document.querySelector('.contact-options').style.opacity = '0';
        document.querySelector('.contact-options').style.visibility = 'hidden';
        document.querySelector('.contact-options').style.transform = 'translateY(20px)';
    });

    // =============================================
    // DROPDOWN DE SERVIÇOS
    // =============================================
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    dropdownBtn.addEventListener('click', () => {
        dropdownContent.classList.toggle('active');
    });

    // Fechar dropdown ao clicar fora
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            dropdownContent.classList.remove('active');
        }
    });

    // =============================================
    // SCROLL SUAVE
    // =============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


  // =============================================
    // FUNCIONALIDADES ESPECÍFICAS - SOBRE NÓS
    // =============================================
    
    // Efeitos para os Badges - Versão Corrigida

    // Animação da Linha do Tempo
    if(document.querySelector('.timeline-section')) {
        // Verifica se AOS está disponível
        if(typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                offset: 120
            });

            const timelineItems = document.querySelectorAll('.timeline-item');
            timelineItems.forEach((item, index) => {
                if(item) {
                    item.setAttribute('data-aos', 'fade-up');
                    item.setAttribute('data-aos-delay', index * 100);
                }
            });
        }
    }

    // =============================================
    // CONTROLE DO MENU ATIVO
    // =============================================
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        if(link) {
            const linkPage = link.getAttribute('href');
            if(currentPage === linkPage) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
});