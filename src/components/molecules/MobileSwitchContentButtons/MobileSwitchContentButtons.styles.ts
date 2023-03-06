import styled from 'styled-components';

export const Wrapper = styled.div`
	position: fixed;
	top: 7rem; // The same value as height of Header
	height: 5.5rem;
	width: 100%;

	display: flex;
	justify-content: space-between;
	gap: 1.5rem;

	padding: 0 1.5rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};

	background-color: ${({ theme }) => theme.colors.background};

	z-index: 800;
`;

export const StyledButton = styled.button<{ name: string }>`
	position: relative;

	padding: 0.75em 0;
	border: none;

	background-color: transparent;

	font-size: 1.3rem;
	font-weight: bold;
	letter-spacing: 1px;
	text-transform: uppercase;

	transition: color 0.2s ease-in;
	cursor: pointer;

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
