
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Colors mapped to CSS variables
                app: {
                	strong: 'rgb(var(--color-app-strong) / <alpha-value>)',
                    bg: 'rgb(var(--color-app-bg) / <alpha-value>)',
                    surface: 'rgb(var(--color-app-surface) / <alpha-value>)',
                    sidebar: 'rgb(var(--color-app-sidebar) / <alpha-value>)',
                    highlight: 'rgb(var(--color-app-highlight) / <alpha-value>)',
                    highlightHover: 'rgb(var(--color-app-highlightHover) / <alpha-value>)',
                    text: 'rgb(var(--color-app-text) / <alpha-value>)',
                    muted: 'rgb(var(--color-app-muted) / <alpha-value>)',
                    border: 'rgb(var(--color-app-border) / <alpha-value>)'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            }
        }
    }
}

// --- Theme Toggle Logic ---

// 1. Check preference immediately to prevent flicker
const savedTheme = localStorage.getItem('themePreference');
if (savedTheme !== 'dark') {
    document.documentElement.classList.add('light-mode');
}

// 2. Setup button listener on load
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    
    // Grab our new header SVG elements
    const headerSunIcon = document.getElementById('headerSunIcon');
    const headerMoonIcon = document.getElementById('headerMoonIcon');

    if (!btn) return;
    
    function updateUI(isLight) {
        // MOVED INSIDE: Now it searches for these elements every time the UI updates,
        // ensuring it finds the footer logo even after it was fetched asynchronously.
        const logo = document.getElementById('app-logo');
        const downloadlogo = document.getElementById('download-logo');
        const footerLogo = document.getElementById('footer-logo');
        const heroMockup = document.getElementById('hero-mockup');
        const heroBg = document.getElementById('hero-bg');

        if (isLight) {
            // Light Mode: Show Moon, Hide Sun
            if (headerMoonIcon) headerMoonIcon.classList.remove('hidden');
            if (headerSunIcon) headerSunIcon.classList.add('hidden');
            
            btn.setAttribute('aria-label', 'Switch to Dark Mode');
            if (logo) logo.src = './assets/lightmodeicon.png';
            if (downloadlogo) downloadlogo.src = './assets/lightmodeicon.png';
            if (footerLogo) footerLogo.src = './assets/lightmodeicon.png';
            if (heroMockup) heroMockup.src = './assets/intro -light.png';
            if (heroBg) heroBg.src = './assets/herobg -light.png';
        } else {
            // Dark Mode: Show Sun, Hide Moon
            if (headerSunIcon) headerSunIcon.classList.remove('hidden');
            if (headerMoonIcon) headerMoonIcon.classList.add('hidden');
            
            btn.setAttribute('aria-label', 'Switch to Light Mode');
            if (logo) logo.src = './assets/darkmodeicon.png';
            if (downloadlogo) downloadlogo.src = './assets/darkmodeicon.png';
            if (footerLogo) footerLogo.src = './assets/darkmodeicon.png';
            if (heroMockup) heroMockup.src = './assets/intro -dark.png';
            if (heroBg) heroBg.src = './assets/herobg -dark.png';
        }
    }

    // Initialize UI
    updateUI(document.documentElement.classList.contains('light-mode'));

    // Handle Click
    btn.addEventListener('click', () => {
        const isLight = document.documentElement.classList.toggle('light-mode');
        localStorage.setItem('themePreference', isLight ? 'light' : 'dark');
        updateUI(isLight);
        
        window.dispatchEvent(new Event('themeChanged'));
    });
});

// --- Mobile Menu Toggle Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });
    }
});

// --- Footer Fetch Logic ---
document.addEventListener("DOMContentLoaded", () => {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    if (footerPlaceholder) {
        fetch('footer.html')
            .then(response => {
                if (!response.ok) throw new Error('Failed to load footer');
                return response.text();
            })
            .then(data => {
                footerPlaceholder.innerHTML = data;
                
                // Immediately check the theme once the footer finishes loading
                // to ensure it matches the rest of the page perfectly on load.
                const isLight = document.documentElement.classList.contains('light-mode');
                const footerLogo = document.getElementById('footer-logo');
                if (footerLogo) {
                    footerLogo.src = isLight ? './assets/lightmodeicon.png' : './assets/darkmodeicon.png';
                }
            })
            .catch(error => console.error('Error loading footer:', error));
    }
});