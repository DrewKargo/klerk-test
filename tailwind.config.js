/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
		height: {
			'42px': '42px',
		},
		colors:{
			'gray-disabled': '#999999',
			'gray-secondary': '#666666',
			'gray-stroke': '#DCDCDC',
			'gray-bg': '#F5F5F8',
			'blue-link': '#5A8CF1',
			'blue-link-shadow': '#E6EDFF',
			'blue-ui': '#316FEE',
		},
		fontFamily: {
			'roboto': ['Roboto'],
		},
		fontSize: {
			'h1': ['56px', {
				lineHeight: '1.3',
				letterSpacing: '-0.56px;'
				}
			],
			'h1-sm': ['32px', {
				lineHeight: '42px',
				}
			],
			'32': '32px',
			'13': '13px',
		},
		letterSpacing: {
			tighter: '-0.24px;'
		},
		boxShadow: {
			'card': '0px 8px 16px 0px rgba(0, 0, 0, 0.08)',
		},
		screens: {
			'mobile+': '425px',
		},
		gridTemplateColumns:{
			'cards' : 'minmax(auto, 324px) minmax(auto, 160px)'
		},
		width: {
			'324px' : '324px'
		},
	},
  },
  plugins: [],
}

