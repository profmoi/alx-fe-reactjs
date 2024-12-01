/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Paths to all template files
  darkMode: false, // Can be 'media' or 'class' for dark mode configurations
  theme: {
    extend: {}, // Add custom themes or extend existing ones here
  },
  variants: {
    extend: {}, // Extend utility variants here
  },
  plugins: [], // Include plugins if needed
};
