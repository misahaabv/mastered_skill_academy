
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		fontFamily: {
			nunito: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
		},
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: 'rgb(57,60,230)',
					foreground: '#fff'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'fade-in': {
				  '0%': { opacity: '0', transform: 'translateY(30px)' },
				  '100%': { opacity: '1', transform: 'translateY(0)' }
				},
			},
			animation: {
				'fade-in': 'fade-in 0.8s cubic-bezier(0.23,1,0.32,1)'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
