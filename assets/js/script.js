// Language Switcher
function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-fr][data-en]');
    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
    
    // Save language choice to localStorage
    localStorage.setItem('preferredLang', lang);
}

// Initialize language from localStorage
const savedLang = localStorage.getItem('preferredLang') || 'fr';
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage(savedLang);
});

// Language switch buttons
const langBtns = document.querySelectorAll('.lang-btn');
langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        switchLanguage(lang);
    });
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navbar = document.querySelector('.navbar');

if (mobileMenuToggle && navbar) {
    mobileMenuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        mobileMenuToggle.textContent = navbar.classList.contains('active') ? '✕' : '☰';
    });
}

// FAQ Accordion
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('.faq-icon');
        
        if (answer) {
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            if (icon) {
                icon.textContent = icon.textContent === '+' ? '−' : '+';
            }
        }
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        
        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                if (successMessage) {
                    successMessage.style.display = 'block';
                }
                contactForm.reset();
            } else {
                alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
            }
        } catch (error) {
            alert('Erreur lors de l\'envoi du message. Veuillez réessayer.');
        }
    });
}

// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));
});
