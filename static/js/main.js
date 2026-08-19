/* ==========================================================================
   TOTEM POLE CREATIONS PRIVATE LIMITED - MAIN JAVASCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            offset: 120
        });
    }

    // 2. Navbar Background Change on Scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg', 'bg-dark');
                navbar.style.transition = 'all 0.3s ease-in-out';
            } else {
                navbar.classList.remove('shadow-lg');
            }
        });
    }

    // 3. Active Link Highlighter based on current URL
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link, .dropdown-item');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
            if (link.classList.contains('dropdown-item')) {
                const parentDropdown = link.closest('.dropdown');
                if (parentDropdown) {
                    const dropdownToggle = parentDropdown.querySelector('.dropdown-toggle');
                    if (dropdownToggle) dropdownToggle.classList.add('active');
                }
            }
        }
    });

    // 4. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 5. Scroll-To-Top Button Logic
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    scrollTopBtn.className = 'btn btn-danger position-fixed bottom-0 end-0 m-4 rounded-circle shadow-lg d-none';
    scrollTopBtn.style.zIndex = '9999';
    scrollTopBtn.style.width = '45px';
    scrollTopBtn.style.height = '45px';
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.remove('d-none');
        } else {
            scrollTopBtn.classList.add('d-none');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 6. Interactive Card Hover Effect Trigger
    const animateCards = document.querySelectorAll('.card, .card-custom');
    animateCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-6px)';
            card.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

});