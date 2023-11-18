/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#643335",
                secondary: "#afa9a0",
                accent1: "#212c64",
                accent2: "#ededed",
                accent3: "#221a08",
            },
            fontFamily: {
                headings: ["Minion Pro Regular Bold", "Times New Roman", "serif"],
                paragraph: ["Helvetica Neue Condensed", "Helvetica Neue", "Calibri", "Helvetica", "sans-serif"],
            },
        },
    },
    plugins: [],
};
