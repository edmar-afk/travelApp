/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			keyframes: {
				typewriter: {
					"0%": { width: "0%" },
					"100%": { width: "100%" },
				},
				blink: {
					"0%": { borderColor: "transparent" },
					"50%": { borderColor: "transparent" },
					"100%": { borderColor: "transparent" },
				},
			},
			animation: {
				typewriter: "typewriter 0.3s steps(40, end) 1.5s 1 normal both",
				blink: "blink 1s step-end infinite",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
});
