const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)', ...fontFamily.sans],
				lora: ['var(--font-lora)', 'sans-serif'],
			},
			colors: {
				background: '#0F0E17',
				primary: '#5928E5',
				secondary: '#f25f4c',
				tertiary: '#E53170',
				quaternary: '#FED9DA',
				text: '#fffffe',
				paragraph: '#a7a9be',
				button: '#FF8906',
			},
			fontSize: {
				h1: ['4rem', '1.25'],
				h2: ['3rem', '1.16'],
				h3: ['2.5rem', '1.2'],
				h4: ['2rem, 1.25'],
				h5: ['1.5rem', '1.3'],
				big: ['1.5rem', '1.7'],
				medium: ['1.25rem', '1.6'],
				normal: ['1rem', '1.5'],
				small: ['0.75rem', '1.8'],
			},
		},
	},
	plugins: [],
}
