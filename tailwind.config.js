/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		container: {
			center: true,
			padding: '12px',
		},
		screens: {
			sm: '540px',
			md: '720px',
			lg: '960px',
			xl: '1320px',
		},
		fontSize: {
			base: ['16px', 1.5],
			lg: ['20px', 1.5],
			xl: ['24px', 1.5],
			'2xl': ['28px', 1.5],
			'3xl': ['32px', 1.5],
			'4xl': ['40px', 1.5],
		},
		extend: {
			padding: {
				'30': '120px',
			},
			colors: {
				primary: {
					light: '#FDEDED',
					DEFAULT: '#F36B6B',
					dark: '#E96161',
				},
				secondary: {
					DEFAULT: '#9D1EAD',
					emphasis: '#F3E3F5',
				},
				success: {
					DEFAULT: '#1F958B',
					emphasis: '#E2F5F4',
				},
				light: {
					DEFAULT: '#FAEEE2',
					emphasis: '#FBF9F7',
				},
				grey: {
					100: '#F2F2F2',
					200: '#E0E0E0',
					300: '#BDBDBD',
					400: '#828282',
					500: '#4F4F4F',
					600: '#333333',
				}
			},
			borderRadius: {
				DEFAULT: '50px',
				full: '100px'
			},
		},
	},
	plugins: [],
}