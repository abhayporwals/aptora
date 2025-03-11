/** @type {import('tailwindcss').Config} */
export const content = [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
    extend: {
        colors: {
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
        },
        animation: {
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
    },
};
export const plugins = []; 