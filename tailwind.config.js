/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const darkMode = 'class';
export const theme = {
    extend: {
        colors: {
            border: 'var(--border)', // Add this line
            primary: 'var(--primary)',
            'primary-dark': 'var(--primary-dark)',
            'primary-light': 'var(--primary-light)',
            'primary-lighter': 'var(--primary-lighter)',
            dark: 'var(--dark)',
            light: 'var(--light)',
            background: 'var(--background)',
            foreground: 'var(--foreground)',
            'card-bg': 'var(--card-bg)',
            'card-border': 'var(--card-border)',
            'card': {
                bg: 'var(--card-bg)',
                border: 'var(--card-border)',
            }
        },
        animation: {
            'slide-in': 'slideIn 0.5s ease-out forwards',
            'fade-scale': 'fadeScale 0.4s ease-out forwards',
            'fade-in': 'fadeIn 0.6s ease-out forwards',
            'float': 'floatUpDown 4s ease-in-out infinite',
            'pulse': 'pulse 2s ease-in-out infinite',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        spacing: {
            '18': '4.5rem',
            '22': '5.5rem',
        },
        borderRadius: {
            'xl': '1rem',
            '2xl': '1.5rem',
        },
        backdropBlur: {
            'xs': '2px',
            'md': '8px',
        },
    },
};
export const plugins = []; 