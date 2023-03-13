import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BottomBorder = styled(NavLink)<{ name: string }>`
	position: relative;

	&::before {
		content: '';
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 3px;

		background-color: ${({ theme, name }) => theme.colors[name]};

		transition: width 0.25s ease-in-out;
	}
`;
