/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                palermo1: 'hsla(135, 9%, 91%, 1)',
                palermo2: 'hsla(197.095, 100%, 35%, 1)',
                palermo3: 'hsla(358.343, 100%, 65%, 1)',
                palermo4: 'hsla(359.333, 37%, 48%, 1)',
                palermo5: 'hsla(204.375, 100%, 19%, 1)',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            spacing: {
                180: '32rem',
            },
        },
    },
    plugins: [],
};
