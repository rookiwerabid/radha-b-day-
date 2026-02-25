// Smooth scroll enhancement
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

// Tab navigation - scroll to section
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.getAttribute('data-tab');
        const section = document.getElementById(tabName);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Music toggle
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
let isMusicPlaying = false;

// Auto-play music on first user interaction
function enableAutoplay() {
    bgMusic.muted = false;
    bgMusic.play().catch(() => {
        console.log('Autoplay not allowed yet');
    });
    isMusicPlaying = true;
    musicBtn.style.opacity = '1';
    document.removeEventListener('click', enableAutoplay);
    document.removeEventListener('keydown', enableAutoplay);
}

document.addEventListener('click', enableAutoplay);
document.addEventListener('keydown', enableAutoplay);

musicBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isMusicPlaying) {
        bgMusic.pause();
        musicBtn.style.opacity = '0.5';
        isMusicPlaying = false;
    } else {
        bgMusic.play().catch(() => {
            console.log('Audio autoplay prevented by browser');
        });
        musicBtn.style.opacity = '1';
        isMusicPlaying = true;
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-delayed, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
});

// Add a gentle message in console
console.log('%c🤍 Happy Birthday, Radha! 🤍',
    'font-size: 16px; color: #d4a5a5; font-weight: bold;');
console.log('%cThank you for being you.',
    'font-size: 14px; color: #8b7b7b; font-style: italic;');
