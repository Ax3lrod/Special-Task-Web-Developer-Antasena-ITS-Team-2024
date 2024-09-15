/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
       ],
  theme: {
    extend: {
        fontFamily: {
            'popins': ['Poppins', 'sans-serif'],
        },
        backgroundImage: {
            'main-gradient': 'linear-gradient(92deg, #88359D 1.12%, #2F6C8F 49.51%, #1EA56C 98.88%)',
        }
    },
  },
  plugins: [],
}

