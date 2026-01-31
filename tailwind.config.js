/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0e4d58", // Deep Ocean Teal
                secondary: "#f3f0e6", // Soft Sand
                accent: "#e68a7c", // Warm Coral
                text: "#2c3e50", // Dark Blue-Grey for text
                // Keep these in case they are used elsewhere, though original didn't have them
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                serif: ["var(--font-playfair)", "serif"],
                sans: ["var(--font-lato)", "sans-serif"],
            },
            keyframes: {
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                "fade-in-up": "fadeInUp 0.8s ease-out forwards",
            },
        },
    },
    plugins: [],
};
