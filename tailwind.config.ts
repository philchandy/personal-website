import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
      },
      animation: {
        'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'ping-large': 'ping-large 1s ease-in-out infinite',
        'move-left': 'move-left 1s linear infinite',
        'move-right': 'move-right 1s linear infinite',
      },
      keyframes: {
        'text-slide': {
          '0%, 20%': {
              transform: 'translateY(0%)',
          },
          '20%, 40%': {
              transform: 'translateY(-20%)',
          },
          '40%, 60%': {
              transform: 'translateY(-40%)',
          },
          '60%, 80%': {
              transform: 'translateY(-60%)',
          },
          '80%, 100%': {
              transform: 'translateY(-80%)',
          },
        },
        'ping-large': {
          '75%, 100%': {
            transform:'scale(3)',
            opacity:'0',
          }
        },
        "move-left": {
          "0": {
            transform:'translateX(0%)',
          },
          "100%":{
            transform:'translate(-50%)',
          },
        }, 
        "move-right": {
          "0": {
            transform:'translateX(-50%)',
          },
          "100%":{
            transform:'translate(0%)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
