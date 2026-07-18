document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // ==========================================================================
    // Theme Management (Dark / Light Mode)
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    
    let currentTheme = savedTheme || (systemPrefersLight ? 'light' : 'dark');
    htmlElement.setAttribute('data-theme', currentTheme);
    updateThemeToggleUI(currentTheme);

    themeToggleBtn.addEventListener('click', () => {
        currentTheme = htmlElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        updateThemeToggleUI(currentTheme);
    });

    function updateThemeToggleUI(theme) {
        // Lucide icons are handled via CSS display rules on light/dark theme attributes,
        // but we can add a visual state class here if needed.
    }

    // ==========================================================================
    // Mobile Navigation Menu
    // ==========================================================================
    const mobileToggleBtn = document.getElementById('mobile-nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileToggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        mobileToggleBtn.classList.toggle('open');
    });

    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            mobileToggleBtn.classList.remove('open');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileToggleBtn.contains(e.target)) {
            navMenu.classList.remove('open');
            mobileToggleBtn.classList.remove('open');
        }
    });

    // ==========================================================================
    // Header Scroll State & Back to Top Button
    // ==========================================================================
    const header = document.getElementById('header');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;

        // Header scrolled style
        if (scrollPos > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back to top button visibility
        if (scrollPos > 400) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ==========================================================================
    // Hero Typewriter Effect
    // ==========================================================================
    const typewriterElement = document.getElementById('typewriter');
    const words = ["프론트엔드 개발자", "UI/UX 디자이너", "지속 가능한 코드를 쓰는 개발자"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Faster when erasing
        } else {
            typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 150; // Natural typing speed
        }

        if (!isDeleting && charIndex === currentWord.length) {
            // Wait at end of word
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500; // Small pause before next word
        }

        setTimeout(typeEffect, typingSpeed);
    }

    if (typewriterElement) {
        setTimeout(typeEffect, 1000);
    }

    // ==========================================================================
    // About Section Tabs
    // ==========================================================================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');

            // Deactivate all tabs & panes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Activate current tab & pane
            btn.classList.add('active');
            const targetPane = document.getElementById(`tab-pane-${tabId}`);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // ==========================================================================
    // Scroll Spy (Highlight active nav link)
    // ==========================================================================
    const sections = document.querySelectorAll('section[id]');
    
    function scrollSpy() {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    }
    window.addEventListener('scroll', scrollSpy);

    // ==========================================================================
    // Intersection Observer for Scroll Reveals
    // ==========================================================================
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // ==========================================================================
    // Intersection Observer for Skill Bar Fills
    // ==========================================================================
    const skillsSection = document.getElementById('skills');
    const skillBars = document.querySelectorAll('.skill-bar-fill');

    if (skillsSection) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Trigger skill bar animation
                    skillBars.forEach(bar => {
                        const width = bar.style.getPropertyValue('--width');
                        bar.style.width = width;
                    });
                    skillsObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });

        skillsObserver.observe(skillsSection);
    }

    // ==========================================================================
    // Contact Form Submission (Mock API call)
    // ==========================================================================
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('form-submit-btn');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Prepare button UI state
            submitBtn.disabled = true;
            submitBtn.querySelector('.btn-text').classList.add('hidden');
            submitBtn.querySelector('.btn-icon').classList.add('hidden');
            submitBtn.querySelector('.spinner').classList.remove('hidden');

            // Mock network latency (1.5 seconds)
            setTimeout(() => {
                // Reset button state
                submitBtn.disabled = false;
                submitBtn.querySelector('.btn-text').classList.remove('hidden');
                submitBtn.querySelector('.btn-icon').classList.remove('hidden');
                submitBtn.querySelector('.spinner').classList.add('hidden');

                // Visual success feedback
                formStatus.classList.remove('hidden', 'error');
                formStatus.classList.add('success');
                formStatus.textContent = '메세지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.';
                
                // Clear input values
                contactForm.reset();

                // Clear message after 5 seconds
                setTimeout(() => {
                    formStatus.classList.add('hidden');
                }, 5000);
            }, 1500);
        });
    }
});
