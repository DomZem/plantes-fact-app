import styled from 'styled-components';

export const BorderBottomHover = styled.div<{ name: string }>`
	position: relative;

	transition: color 0.2s ease-in;

	&::before {
		content: '';

		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 3px;
		width: 0%;

		background-color: ${({ theme, name }) => theme.colors[name.toLowerCase()]};

		transition: width 0.2s ease-in;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.white};
	}

	&:hover::before {
		width: 100%;
	}
`;
