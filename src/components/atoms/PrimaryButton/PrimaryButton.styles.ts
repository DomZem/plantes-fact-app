import styled from 'styled-components';
import { ViewWrapper } from '../ViewWrapper/ViewWrapper';

export const Wrapper = styled(ViewWrapper)<{ name: string; isActive: boolean }>`
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
	border-color: ${({ theme, name, isActive }) => isActive && theme.colors[name]};
	background-color: ${({ theme, name, isActive }) => isActive && theme.colors[name]};
	color: ${({ theme, isActive }) => isActive && theme.colors.white};

	span {
		margin-right: 1rem;
	}

	&:hover {
		background-color: ${({ theme, isActive }) => !isActive && theme.colors.darkGrey};
		color: ${({ theme }) => theme.colors.white};
	}
`;
