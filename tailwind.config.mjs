
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  extend: {
		colors: {
		  primary: "#f05006",
		  accent: "#FE5230",
		  "ij-orange": "#ffd5a8",
		  "ij-black": "#212121",
		  "ij-red": "#FF4C00",
		  "ij-red-depth": "#fe2222",
		  "ij-sand": "#70662e",
		  "ij-green": "#00A550",
		  "ij-blue": "#E8F2F8",
		  "ij-yellow": "#EFA500",
		  'ij-depthblue': "#0000CD",
		},
		backgroundImage: {
		  "tripbackground": "url(/logotrip.webp)",
		},
		fontFamily: {
			sans: ['Lato', 'sans-serif'],
		  },
		borderRadius: {
		  "4xl": "3rem",
		},
		backgroundSize: {
		  "auto-height": "auto 100%",
		},
		letterSpacing: {
		  separated: "0.35px",
		},
		padding: {
		  15: "60px",
		},
		transitionDuration: {
		  DEFAULT: "500ms",
		},
	  },
	},
	plugins: [
	  ({ addUtilities }) => {
		const newUtilities = {
		  ".no-scrollbar::-webkit-scrollbar": {
			display: "none",
		  },
		  ".no-scrollbar": {
			"-ms-overflow-style": "none",
			"scrollbar-width": "none",
		  },
		};
  
		addUtilities(newUtilities);
	  },
	],
  };
  