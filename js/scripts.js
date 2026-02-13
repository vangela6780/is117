// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) {
            navMenu.style.display = 'none';
        }
    });
});

// Opportunity Form Handler
const opportunityForm = document.getElementById('opportunityForm');
if (opportunityForm) {
    opportunityForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = opportunityForm.querySelector('input[type="email"]').value;
        const interest = opportunityForm.querySelector('select').value;
        
        // In production, this would send to a backend
        // For now, open email client
        const subject = encodeURIComponent(`Opportunity Inquiry - ${interest}`);
        const body = encodeURIComponent(`I'm interested in: ${interest}\n\nReply to: ${email}`);
        window.location.href = `mailto:your.email@njit.edu?subject=${subject}&body=${body}`;
        
        // Show success message
        alert('Thanks! Redirecting to email...');
    });
}

// Smooth scrolling for anchor links
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

// Add scroll animation for elements
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

// Observe project cards and skill categories
document.querySelectorAll('.project-card, .skill-category, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = '#3b82f6';
        } else {
            link.style.color = '#e2e8f0';
        }
    });
});

// Debounce function for resize events
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

// Handle responsive menu on resize
const handleResize = debounce(() => {
    if (window.innerWidth > 768) {
        if (navMenu) {
            navMenu.style.display = 'flex';
        }
    }
}, 250);

window.addEventListener('resize', handleResize);

console.log('Portfolio site loaded successfully!');