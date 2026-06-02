/* ============================================
   SLACH - JAVASCRIPT
   Semi-Lycée Anacaona du Cap-Haitien
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    initializeFAQ();
    initializeContactForm();
    initializeScrollSpy();
});

/* ============================================
   FAQ FUNCTIONALITY
   ============================================ */

function initializeFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const faqAnswer = faqItem.querySelector('.faq-answer');
            const isOpen = faqAnswer.style.display !== 'none';
            
            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.querySelector('.faq-answer').style.display = 'none';
                    item.querySelector('.faq-icon').textContent = '+';
                }
            });
            
            // Toggle current item
            if (isOpen) {
                faqAnswer.style.display = 'none';
                this.querySelector('.faq-icon').textContent = '+';
            } else {
                faqAnswer.style.display = 'block';
                this.querySelector('.faq-icon').textContent = '−';
            }
        });
    });
}

/* ============================================
   CONTACT FORM SUBMISSION
   ============================================ */

function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Validate form
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Veuillez remplir tous les champs requis.');
            return;
        }
        
        // Email validation
        if (!isValidEmail(formData.email)) {
            alert('Veuillez entrer une adresse email valide.');
            return;
        }
        
        // In a real application, you would send this data to a server
        console.log('Form Data:', formData);
        
        // Show success message
        showSuccessMessage();
        
        // Reset form
        contactForm.reset();
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.style.display = 'block';
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }
}

/* ============================================
   SCROLL SPY FOR CHARTER NAVIGATION
   ============================================ */

function initializeScrollSpy() {
    const navItems = document.querySelectorAll('.charter-nav .nav-item');
    
    if (navItems.length === 0) return;
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        navItems.forEach(item => {
            const href = item.getAttribute('href');
            if (!href) return;
            
            const section = document.querySelector(href);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= sectionTop - 150) {
                    current = href;
                }
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === current) {
                item.classList.add('active');
            }
        });
    });
}

/* ============================================
   SMOOTH SCROLLING FOR ANCHOR LINKS
   ============================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

/* ============================================
   BUTTON INTERACTIONS
   ============================================ */

const cta_button = document.querySelector('.cta-button');
if (cta_button) {
    cta_button.addEventListener('click', function() {
        // Scroll to contact form or show modal
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth' });
            document.getElementById('name').focus();
        } else {
            // If not on contact page, navigate to it
            window.location.href = 'contact.html';
        }
    });
}

/* ============================================
   ACTIVE NAV LINK DETECTION
   ============================================ */

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

setActiveNavLink();

/* ============================================
   ADD CSS CLASS TO ACTIVE CHARTER NAV
   ============================================ */

const style = document.createElement('style');
style.innerHTML = `
    .charter-nav .nav-item.active {
        background-color: var(--white);
        border-left-color: var(--primary-green);
        color: var(--primary-green);
        font-weight: 700;
    }
`;
document.head.appendChild(style);

/* ============================================
   HELPER FUNCTIONS
   ============================================ */

// Add utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add utility function for throttling
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/* ============================================
   PRINT STYLES
   ============================================ */

window.addEventListener('beforeprint', function() {
    // Optimize for printing
    document.querySelectorAll('.header, .footer').forEach(el => {
        el.style.display = 'none';
    });
});

window.addEventListener('afterprint', function() {
    // Restore after printing
    document.querySelectorAll('.header, .footer').forEach(el => {
        el.style.display = '';
    });
});
