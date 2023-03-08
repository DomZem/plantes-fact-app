import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const openNav = css`
	transform: translateX(0);
`;

const closeNav = css`
	transform: translateX(-100%);
`;

export const Wrapper = styled.nav<{ isMenuOpen: boolean }>`
	position: fixed;
	top: 7rem; // The same value as header height
	bottom: 0;
	left: 0;
	right: 0;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;

	padding: 1.5rem;

	background-color: ${({ theme }) => theme.colors.federalBlue};
	z-index: 900;

	transition-property: display, transform;
	transition-duration: 300ms;
	transition-timing-function: ease-in-out;
	${({ isMenuOpen }) => (isMenuOpen ? openNav : closeNav)}
`;

export const StyledName = styled.p`
	font-size: 1.5rem;
	font-weight: bold;

	text-transform: uppercase;
	letter-spacing: 2px;

	transition: color 0.2s ease-in-out;

	color: ${({ theme }) => theme.colors.slightGrey};
`;

export const StyledIcon = styled.div<{ name: string }>`
	width: 2rem;
	height: 2rem;

	border-radius: 100%;

	background-color: ${({ theme, name }) => theme.colors[name]};
`;

export const StyledLink = styled(NavLink)`
	width: 100%;
	flex: 1;

	display: flex;
	align-items: center;
	gap: 2rem;

	& + & {
		border-top: 1px solid ${({ theme }) => theme.colors.slightGrey};
	}

	svg {
		width: 1.5rem;
		height: 1.5rem;

		margin-left: auto;

		fill: ${({ theme }) => theme.colors.slightGrey};

		transition: fill 0.2s ease-in-out;
	}

	// Style for active link
	&.active {
		${StyledName} {
			color: ${({ theme }) => theme.colors.white};
		}

		svg {
			fill: ${({ theme }) => theme.colors.white};
		}
	}
`;
