import { themeType } from 'lib/types/theme';

export const theme: themeType = {
	colors: {
		federalBlue: '#070724', // background
		slightGrey: '#5C677D', // paragraphs, button text, border, links
		white: '#FFFFFF', //headers, active links
		darkGrey: '#38384F', // desktop button background on hover

		// planets
		mercury: '#419EBB',
		venus: '#EDA249',
		earth: '#6F2ED6',
		mars: '#D14C32',
		jupiter: '#D83A34',
		saturn: '#CD5120',
		uranus: '#1EC2A4',
		neptune: '#2D68F0',
	},
	fonts: {
		spartan: 'League Spartan, sans-serif;',
		antonio: 'Antonio, sans-serif',
	},

	// Every planet have different max size because that mirrors its size in the solar system
	planetsMaxSize: {
		mercury: '32%',
		venus: '45%',
		earth: '50%',
		mars: '37%',
		jupiter: '65%',
		saturn: '74%',
		uranus: '51%',
		neptune: '50%',
	},
};
