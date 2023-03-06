import styled from 'styled-components';

export const Wrapper = styled.div`
	position: fixed;
	top: 7rem; // The same value as height of Header
	height: 5.5rem;
	left: 0;
	right: 0;

	display: flex;
	justify-content: space-between;
	gap: 1.5rem;

	padding: 0 1.5rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.slightGrey};

	background-color: ${({ theme }) => theme.colors.federalBlue};

	z-index: 800;
`;

export const StyledButton = styled.button<{ name: string; isActive: boolean }>`
	position: relative;

	border: none;

	background-color: transparent;
	color: ${({ theme, isActive }) => isActive && theme.colors.white};

	font-size: 1.3rem;
	font-weight: bold;
	letter-spacing: 1px;
	text-transform: uppercase;

	transition: color 0.2s ease-in-out;
	cursor: pointer;

	&::before {
		content: '';

		position: absolute;
		bottom: 0;
		width: ${({ isActive }) => isActive && '100%'};
		height: 3px;

		background-color: ${({ theme, name }) => theme.colors[name.toLowerCase()]};

		transition: width 0.2s ease-in-out;
	}
`;
