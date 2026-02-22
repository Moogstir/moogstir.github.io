
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Colors mapped to CSS variables
                app: {
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
    const logo = document.getElementById('app-logo');
    const footerLogo = document.getElementById('footer-logo');
    const heroMockup = document.getElementById('hero-mockup');
    
    const sunSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'
    const moonSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>'

    if (!btn) return;
    
    function updateUI(isLight) {
        if (isLight) {
            // If Light Mode is active, show Moon icon (switch to Dark)
            btn.innerHTML = moonSVG;
            btn.setAttribute('aria-label', 'Switch to Dark Mode');
            if (logo) logo.src = './assets/lightmodeicon.png';
            if (footerLogo) footerLogo.src = './assets/lightmodeicon.png';
            if (heroMockup) heroMockup.src = './assets/intro -light.png';
        } else {
            // If Dark Mode is active, show Sun icon (switch to Light)
            btn.innerHTML = sunSVG;
            btn.setAttribute('aria-label', 'Switch to Light Mode');
            if (logo) logo.src = './assets/darkmodeicon.png';
            if (footerLogo) footerLogo.src = './assets/darkmodeicon.png';
            if (heroMockup) heroMockup.src = './assets/intro -dark.png';
        }
    }

    // Initialize UI
    updateUI(document.documentElement.classList.contains('light-mode'));

    // Handle Click
    btn.addEventListener('click', () => {
        const isLight = document.documentElement.classList.toggle('light-mode');
        localStorage.setItem('themePreference', isLight ? 'light' : 'dark');
        updateUI(isLight);
        
        // Dispatch event so canvas/charts can redraw colors
        window.dispatchEvent(new Event('themeChanged'));
    });
});
