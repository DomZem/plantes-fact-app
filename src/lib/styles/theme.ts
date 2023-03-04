import { themeType } from 'lib/types/theme';

export const theme: themeType = {
	colors: {
		background: '#070724',
		border: 'rgba(151, 151, 151, 0.35)',
		white: '#FFFFFF',
		paragraph: '#838391',
		darkGrey: '#38384F',
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
	planetsMaxWidth: {
		mobile: {
			mercury: '32%',
			venus: '45%',
			earth: '50%',
			mars: '37%',
			jupiter: '65%',
			saturn: '74%',
			uranus: '51%',
			neptune: '50%',
		},
	},
};
