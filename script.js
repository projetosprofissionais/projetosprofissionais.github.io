// ============================================
// 🚀 MESQUITA DEV - JavaScript Profissional
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================
    // 1. EFEITO DE DIGITAÇÃO (Typing Effect)
    // ============================================
    const typingText = document.querySelector('.subtitulo');
    const textOriginal = typingText.textContent;
    typingText.textContent = '';
    
    let charIndex = 0;
    const typeSpeed = 100; // ms por letra
    
    function typeWriter() {
        if (charIndex < textOriginal.length) {
            typingText.textContent += textOriginal.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typeSpeed);
        }
    }
    
    // Inicia após um pequeno delay
    setTimeout(typeWriter, 1000);
    
    
    // ============================================
    // 2. NAVBAR SCRL EFFECT
    // ============================================
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    
    // ============================================
    // 3. SCROLL REVEAL (Animação ao rolar)
    // ============================================
    const revealElements = document.querySelectorAll('.section, .skill-card, .projeto-card');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('revealed');
            }
        });
    }
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Verifica ao carregar
    
    
    // ============================================
    // 4. SKILLS ANIMAÇÃO HOVER INTERATIVA
    // ============================================
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.05)';
            card.style.boxShadow = '0 20px 40px rgba(0, 212, 255, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '';
        });
    });
    
    
    // ============================================
    // 5. PROJETOS - ANIMAÇÃO NO HOVER
    // ============================================
    const projetoCards = document.querySelectorAll('.projeto-card');
    
    projetoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const img = card.querySelector('.projeto-img i');
            img.style.transform = 'rotate(360deg) scale(1.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            const img = card.querySelector('.projeto-img i');
            img.style.transform = 'rotate(0) scale(1)';
        });
    });
    
    
    // ============================================
    // 6. MENU MOBILE TOGGLE
    // ============================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Fecha menu ao clicar em um link
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
    
    
    // ============================================
    // 7. SMOOTH SCROLL PARA NAVEGAÇÃO
    // ============================================
    document.querySelectorAll('a[href^="#']').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    // ============================================
    // 8. CONTADOR ANIMADO DE SKILLS
    // ============================================
    const skillsSection = document.querySelector('#skills');
    let countered = false;
    
    const handleSkillsCounter = () => {
        if (!countered && skillsSection.getBoundingClientRect().top < window.innerHeight) {
            countered = true;
            
            skillCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    card.style.transition = 'all 0.5s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    }
    
    window.addEventListener('scroll', handleSkillsCounter);
    
    
    // ============================================
    // 9. EFEITO GLITCH NO NOME (OPCIONAL)
    // ============================================
    const heroName = document.querySelector('.destaque');
    
    heroName.addEventListener('mouseenter', () => {
        heroName.style.animation = 'glitch 0.3s ease';
    });
    
    // ============================================
    // 10. DATA AUTOMÁTICA NO FOOTER
    // ============================================
    const footerYear = document.querySelector('footer p');
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2024', currentYear);
});


// ============================================
// 11. DETECÇÃO DE CONEXÃO (Online/Offline)
// ============================================
window.addEventListener('online', () => {
    showConnectionStatus('online');
});

window.addEventListener('offline', () => {
    showConnectionStatus('offline');
});

function showConnectionStatus(status) {
    // Console log para debug
    console.log(`Conexão: ${status}`);
}