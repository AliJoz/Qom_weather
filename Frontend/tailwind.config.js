/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        lg: "1024px",
      },
      colors: {
        brown: {
          100: "#ECE0D1",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
        bg_log: "#242A38",
      },
      boxShadow: {
        norml: "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
      },
      spacing: {
        25: "6.25rem",
        30: "7.5rem",
        50: "12.5rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        iranBlack: "Iran Block",
        "iran-Dem": "Iran Demibold",
        yekan: "iran yekan",
        bold: "iran bold",
      },
      letterSpacing: {
        tightest: "-0.065em",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "0.625 rem",
        },
      },
      backgroundImage: {
        boxFooter:
          " linear-gradient(61deg, rgba(144,134,134,1) 22%, rgba(254,254,254,1) 100%)",
      },
    },
    screens: {
      xs: "475px",
      sm: "576px",
      md: "760px",
      xl: "1024px",
      xxl: "1280px",
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
  ],
};
