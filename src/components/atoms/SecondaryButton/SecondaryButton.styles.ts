import styled from 'styled-components';
import { BottomBorder } from '../BottomBorder/BottomBorder';

export const Wrapper = styled(BottomBorder)<{ name: string; isActive: boolean }>`
	border: none;

	background-color: transparent;
	color: ${({ theme, isActive }) => isActive && theme.colors.white};

	font-size: 1.3rem;
	font-weight: bold;
	letter-spacing: 1px;
	text-transform: uppercase;

	transition: color 0.25s ease-in-out;
	cursor: pointer;

	&::before {
		width: ${({ isActive }) => (isActive ? '100%' : '0')};
	}
`;
