/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // ─── Official Vaishno Hills Dairy Color Palette ───────────────────────
        // Extracted from https://www.vaishnohillsdairy.co.in/
        cream:      "#fbfaf3",   // .data background (main content bg)
        "cream-2":  "#f0efe7",   // alternate section bg
        "cream-3":  "#ebe8da",   // darker alternate section bg
        dark:       "#1a1a1a",

        // Forest Greens (primary brand colours)
        forest: {
          50:  "#edf3e8",
          100: "#cfe0c4",
          200: "#aecca0",
          300: "#8db97c",
          400: "#72a85e",
          500: "#3c5c1f",   // .head-c1 — primary green used in headings
          600: "#3e5926",   // .theme3 — nav & button background
          700: "#2f4419",
          800: "#1f2f10",
          900: "#192e06",   // html body background
          DEFAULT: "#3c5c1f",
        },

        // Gold / Yellow (accent colour)
        gold: {
          50:  "#fef9e7",
          100: "#fdf0b3",
          200: "#fde57f",
          300: "#fcd94b",
          400: "#f4b200",   // .theme4 — primary gold accent
          500: "#dbaf34",   // .head-c2 — gold heading variant
          600: "#b88a00",
          700: "#8c6700",
          800: "#604600",
          900: "#3a2900",
          DEFAULT: "#f4b200",
        },

        // Red (hover / active accent)
        brand: {
          red:    "#e92f2f",   // .theme5 — hover state colour
          cream:  "#fbfaf3",
          header: "#fdfbea",   // .headVr header background
        },

        // Keep orange & amber for Tailwind utility compatibility
        orange: {
          50:  "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#F97316",
          600: "#EA580C",
          700: "#C2410C",
          800: "#9A3412",
          900: "#7C2D12",
        },
        amber: {
          50:  "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },

        // Legacy aliases used in existing components
        primary:   "#3c5c1f",
        secondary: "#fbfaf3",
        accent:    "#f4b200",
      },
      fontFamily: {
        sans:    ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      animation: {
        gradient:       "gradient 8s linear infinite",
        float:          "float 6s ease-in-out infinite",
        "pulse-slow":   "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-slow":  "bounce 3s infinite",
        "spin-slow":    "spin 8s linear infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { "background-size": "200% 200%", "background-position": "left center" },
          "50%":      { "background-size": "200% 200%", "background-position": "right center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-20px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":  "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        soft:    "0 2px 15px -3px rgba(60,92,31,0.2),  0 10px 20px -2px rgba(60,92,31,0.12)",
        "soft-lg":"0 10px 40px -3px rgba(60,92,31,0.25), 0 20px 30px -2px rgba(60,92,31,0.15)",
        gold:    "0 4px 20px -2px rgba(244,178,0,0.35)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
