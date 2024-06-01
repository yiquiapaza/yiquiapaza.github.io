/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                'text': 'var(--text)',
                'background': 'var(--background)',
                'primary': 'var(--primary)',
                'secondary': 'var(--secondary)',
                'accent': 'var(--accent)',
                'background-primary': 'var(--background-primary)',
                'background-secondary': 'var(--background-secondary)',
                'background-footer': 'var(--background-footer)',
            },
            fontFamily: {
                poppinsBold: ['PoppinsBold', 'sans-serif'],
                poppinsItalic: ['PoppinsBoldItalic', 'sans-serif'],
                poppinsLight: ['PoppinsBoldLight', 'sans-serif'],
                poppinsMedium: ['PoppinsBoldMedium', 'sans-serif'],
                poppinsRegular: ['PoppinsBoldRegular', 'sans-serif'],
            },
            spacing: {
                180: '32rem',
            },
        },
    },
    plugins: [],
};
