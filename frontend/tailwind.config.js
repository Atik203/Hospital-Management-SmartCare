import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

],
  theme: {
    extend: {
      colors: {
        navPrimary: '#007e85',
        
      },
    },
  },
  plugins: [require("daisyui"),nextui()],
}

