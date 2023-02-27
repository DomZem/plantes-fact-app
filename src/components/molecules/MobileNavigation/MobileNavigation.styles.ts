import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MenuToggleButton = styled.button`
	background-color: transparent;
	border: none;
	padding: 0.5rem;
`;

export const Wrapper = styled.nav`
	position: fixed;
	top: 80px;
	bottom: 0;
	left: 0;
	right: 20%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	padding: 1.5rem;

	border-right: 1px solid rgba(151, 151, 151, 0.35);
	z-index: 900;

	a + a {
		border-top: 1px solid rgba(151, 151, 151, 0.35);
	}
`;

export const PlanetLink = styled(NavLink)`
	width: 100%;

	display: flex;
	align-items: center;
	gap: 2rem;

	padding: 2.2rem 0;

	svg {
		width: 1.5rem;
		height: 1.5rem;

		margin-left: auto;

		fill: ${({ theme }) => theme.colors.white};
	}
`;

export const PlanetName = styled.p`
	font-weight: bold;
	font-size: 1.5rem;

	text-transform: uppercase;
	letter-spacing: 2px;
`;

export const PlanetIcon = styled.div<{ name: string }>`
	width: 2rem;
	height: 2rem;

	border-radius: 100%;

	background-color: ${({ theme, name }) => theme.colors[name]};
`;
