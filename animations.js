// --- DeepSquad GSAP Animation Suite (Fixed & Reliable) ---
try {
    if (window.location.pathname.endsWith('.html') && !window.location.pathname.endsWith('index.html')) {
        const cleanPath = window.location.pathname.replace(/\.html$/, '');
        window.history.replaceState(null, '', cleanPath + window.location.search + window.location.hash);
    }
} catch (e) {}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap === 'undefined') return;

    // Register ScrollTrigger plugin if present
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    // 1. Header Scroll Effect
    const header = document.getElementById('header');
    if (header && typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.create({
            start: 'top -50',
            end: 99999,
            toggleClass: { className: 'scrolled', targets: header }
        });
    }

    // 2. Hero Section Entrance Timeline
    const heroTitle = document.querySelector('.hero__title, .game-hero__title');
    const heroSubtitle = document.querySelector('.hero__subtitle, .game-hero__subtitle');
    const heroButtons = document.querySelectorAll('.hero .btn, .game-hero .btn');

    const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    if (heroTitle) {
        heroTimeline.from(heroTitle, {
            y: 40,
            opacity: 0,
            duration: 1,
            clearProps: 'opacity,transform'
        });
    }

    if (heroSubtitle) {
        heroTimeline.from(heroSubtitle, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            clearProps: 'opacity,transform'
        }, '-=0.6');
    }

    if (heroButtons.length > 0) {
        heroTimeline.from(heroButtons, {
            y: 20,
            opacity: 0,
            stagger: 0.15,
            duration: 0.7,
            clearProps: 'opacity,transform'
        }, '-=0.4');
    }

    // 3. Hero Background Parallax Scroll
    const heroSection = document.querySelector('.hero, .game-hero');
    if (heroSection && typeof ScrollTrigger !== 'undefined') {
        gsap.to(heroSection, {
            backgroundPositionY: '30%',
            ease: 'none',
            scrollTrigger: {
                trigger: heroSection,
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });
    }

    // 4. Section Titles Scroll Reveal
    const sectionTitles = document.querySelectorAll('.section__title');
    sectionTitles.forEach(title => {
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.from(title, {
                scrollTrigger: {
                    trigger: title,
                    start: 'top 90%',
                    once: true
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out',
                clearProps: 'opacity,transform'
            });
        }
    });

    // 5. Game Cards & Feature Cards Entrance Animations
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach((card, index) => {
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 88%',
                    once: true
                },
                y: 40,
                opacity: 0,
                scale: 0.98,
                duration: 0.8,
                delay: index * 0.1,
                ease: 'power3.out',
                clearProps: 'opacity,transform'
            });
        }
    });

    const featureCards = document.querySelectorAll('.feature-card');
    if (featureCards.length > 0 && typeof ScrollTrigger !== 'undefined') {
        gsap.from(featureCards, {
            scrollTrigger: {
                trigger: featureCards[0],
                start: 'top 88%',
                once: true
            },
            y: 35,
            opacity: 0,
            stagger: 0.12,
            duration: 0.7,
            ease: 'power2.out',
            clearProps: 'opacity,transform'
        });
    }

    // 6. Social Cards Entrance Animation
    const socialCards = document.querySelectorAll('.social-card');
    if (socialCards.length > 0 && typeof ScrollTrigger !== 'undefined') {
        gsap.from(socialCards, {
            scrollTrigger: {
                trigger: socialCards[0],
                start: 'top 90%',
                once: true
            },
            y: 35,
            opacity: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: 'power2.out',
            clearProps: 'opacity,transform'
        });
    }

    // 7. Screenshots Grid Entrance Animation
    const screenshots = document.querySelectorAll('.screenshot');
    if (screenshots.length > 0 && typeof ScrollTrigger !== 'undefined') {
        gsap.from(screenshots, {
            scrollTrigger: {
                trigger: screenshots[0],
                start: 'top 88%',
                once: true
            },
            y: 30,
            opacity: 0,
            scale: 0.95,
            stagger: 0.1,
            duration: 0.7,
            ease: 'power3.out',
            clearProps: 'opacity,transform'
        });
    }

    // 8. Download & Beta Sections Entrance Animation
    const downloadContainers = document.querySelectorAll('.download-container, .beta-container');
    downloadContainers.forEach(container => {
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.from(container.children, {
                scrollTrigger: {
                    trigger: container,
                    start: 'top 88%',
                    once: true
                },
                y: 30,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: 'power2.out',
                clearProps: 'opacity,transform'
            });
        }
    });

    // 9. Interactive Micro-Interactions on Buttons
    const buttons = document.querySelectorAll('.btn, .btn2, .social__btn, .download-btn, .beta-btn, .lang-btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, { scale: 1.05, duration: 0.2, ease: 'power1.out' });
        });
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, { scale: 1, duration: 0.2, ease: 'power1.out' });
        });
    });
});
