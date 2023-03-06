import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;

	grid-column: 2/3;
	grid-row: 2/3;

	@media (min-width: 1024px) {
		justify-content: flex-start;
		grid-column: 2/3;
		grid-row: 2/3;
	}
`;

export const StyledButton = styled(ViewWrapper)<{ name: string; isActive: boolean }>`
	background-color: ${({ theme }) => theme.colors.federalBlue};

	font-size: 1.4rem;
	font-weight: 700;
	text-transform: uppercase;
	text-align: left;
	letter-spacing: 2px;

	transition-property: background-color, color, border-color;
	transition-duration: 0.15s;
	transition-timing-function: ease-in;
	cursor: pointer;

	// Active button
	border-color: ${({ theme, name, isActive }) => isActive && theme.colors[name.toLowerCase()]};
	background-color: ${({ theme, name, isActive }) => isActive && theme.colors[name.toLowerCase()]};
	color: ${({ theme, isActive }) => isActive && theme.colors.white};

	span {
		margin-right: 1rem;
	}

	&:hover {
		background-color: ${({ theme, isActive }) => !isActive && theme.colors.darkGrey};
		color: ${({ theme }) => theme.colors.white};
	}
`;
