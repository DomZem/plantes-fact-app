import { BottomBorder } from 'components/atoms/BottomBorder/BottomBorder';
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

export const StyledLink = styled(BottomBorder)<{ name: string }>`
	display: flex;
	align-items: center;

	padding: 1.5em 0;

	font-weight: bold;
	letter-spacing: 2px;
	text-transform: uppercase;

	transition: color 0.25s ease-in-out;

	&::before {
		width: 0;
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
