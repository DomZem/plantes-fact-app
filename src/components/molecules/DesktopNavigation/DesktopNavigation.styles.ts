import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1.5rem;
`;

export const StyledLink = styled(NavLink)<{ name: string }>`
	position: relative;

	display: flex;
	align-items: center;

	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 1px;

	@media (min-width: 1024px) {
		opacity: 0.75;
		transition: opacity 0.2s ease-in;

		&::before {
			position: absolute;
			content: '';

			bottom: 0;
			width: 0;
			height: 3px;

			background-color: ${({ theme, name }) => theme.colors[name]};

			transition: width 0.2s ease-in;
		}

		&:hover {
			opacity: 1;
		}

		&:hover::before {
			width: 100%;
		}
	}
`;
