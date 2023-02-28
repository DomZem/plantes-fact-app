import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
		transform: translateX(-100%);
  }
  to {
		transform: translateX(0);
  }
`;

export const Wrapper = styled.nav`
	position: fixed;
	top: 7rem;
	bottom: 0;
	left: 0;
	right: 0;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	padding: 1.5rem;

	background-color: ${({ theme }) => theme.colors.darkBlue};

	z-index: 900;
	animation: ${fadeIn} 0.2s linear;
`;

export const StyledName = styled.p`
	font-weight: bold;
	font-size: 1.5rem;

	text-transform: uppercase;
	letter-spacing: 2px;

	color: ${({ theme }) => theme.colors.white};

	opacity: 0.5;
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
		border-top: 1px solid rgba(151, 151, 151, 0.35);
	}

	svg {
		width: 1.5rem;
		height: 1.5rem;

		margin-left: auto;

		opacity: 0.5;
		fill: ${({ theme }) => theme.colors.white};
	}

	// Style for active link
	&.active {
		${StyledName} {
			opacity: 1;
		}

		svg {
			opacity: 1;
		}
	}
`;
