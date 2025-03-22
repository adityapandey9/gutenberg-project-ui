import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        shadow: "rgba(211, 209, 238, 0.5)",
        searchBackground: "rgb(236, 235, 244)",
        searchOutlineFocus: "rgba(74, 58, 225, 0.6)",
        gutenberg: {
          primary: "var(--gutenberg-primary)",
          background: "var(--gutenberg-background)",
        },
        searchInputText: "var(--gutenberg-search-input-text)",
        grey: {
          light: "rgb(143, 143, 143)",
          medium: "#A0A0A0",
          dark: "#333333",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        h1: ["48px", { lineHeight: "56px", fontWeight: "700" }],
        h2: ["18px", { lineHeight: "18px", fontWeight: "600" }],
        genre: ["20px", { lineHeight: "28px", fontWeight: "400" }],
        body: ["16px", { lineHeight: "24px", fontWeight: "400" }],
        search: ["16px", { lineHeight: "24px", fontWeight: "400" }],
        bookName: ["12px", { lineHeight: "18px", fontWeight: "400" }],
        bookAuthor: ["12px", { lineHeight: "18px", fontWeight: "400" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        sm: "4px",
        md: "8px",
      },
      boxShadow: {
        genreCard: "0 2px 5px 0 rgba(211, 209, 238, 0.5)",
        bookCard: "0 2px 5px 0 rgba(211, 209, 238, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
