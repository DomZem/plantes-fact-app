import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
	width: 100%;

	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1.5rem;

	margin-top: auto;

	@media (min-width: 1024px) {
		height: 100%;
		flex-basis: 50%;
	}
`;

export const StyledLink = styled(NavLink)<{ name: string }>`
	position: relative;

	display: flex;
	align-items: center;

	padding: 1.5em 0;

	font-weight: bold;
	letter-spacing: 2px;
	text-transform: uppercase;

	transition: color 0.25s ease-in-out;

	&::before {
		content: '';

		position: absolute;
		bottom: 0;
		width: 0;
		height: 3px;

		background-color: ${({ theme, name }) => theme.colors[name]};

		transition: width 0.25s ease-in-out;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.white};
	}

	&.active {
		color: ${({ theme }) => theme.colors.white};
	}

	&:hover::before {
		width: 100%;
	}

	&.active::before {
		width: 100%;
	}

	@media (min-width: 1024px) {
		height: 100%;
	}
`;
