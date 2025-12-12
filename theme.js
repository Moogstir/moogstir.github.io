tailwind.config = {
    theme: {
        extend: {
            colors: {
                // Colors based on the actual Novelative Dark UI
                app: {
                    bg: '#1E1E1E',      // Deepest background
                    surface: '#252525', // Main window/card surface
                    sidebar: '#2B2B2B', // Sidebar background
                    highlight: '#FBBC04', // Google's Gold/Yellow for active states
                    highlightHover: '#E8AF04',
                    text: '#DCDCDC',
                    muted: '#A9A9A9',
                    border: '#444444'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            }
        }
    }
}