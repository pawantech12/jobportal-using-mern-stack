/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 20px 60px -6px rgba(0, 0, 0, 0.04)",
      },
      keyframes: {
        updown: {
          "0%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0px)" },
        },
        course: {
          "0%": { transform: "translateY(-50px)" },
          "100%": { transform: "translateY(0px)" },
        },
        cong: {
          "0%": { transform: "translateX(-50px)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
      animation: {
        updown: "updown 2s linear infinite alternate",
        course: "course 3s linear infinite alternate",
        cong: "cong 3s linear infinite alternate",
      },
    },
  },
  plugins: [],
};
