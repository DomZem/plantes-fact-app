import styled from 'styled-components';

export const Wrapper = styled.nav`
	position: fixed;
	top: 80px;
	bottom: 0;
	left: 0;
	right: 20%;

	display: flex;
	justify-content: center;
	align-items: center;

	padding: 1.5rem;

	border-right: 1px solid rgba(151, 151, 151, 0.35);

	z-index: 900;
`;

export const LinksList = styled.ul`
	width: 100%;
	height: 100%;

	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-direction: column;

	li + li {
		border-top: 1px solid rgba(151, 151, 151, 0.35);
	}
`;

export const LinksListItem = styled.li`
	height: 100%;
	width: 100%;

	display: flex;
	align-items: center;
	gap: 2rem;

	a {
		font-weight: bold;
		font-size: 1.5rem;

		text-transform: uppercase;
		letter-spacing: 2px;
	}

	svg {
		width: 1.5rem;
		height: 1.5rem;

		margin-left: auto;

		fill: ${({ theme }) => theme.colors.white};
	}
`;

export const PlanetIcon = styled.div<{ name: string }>`
	width: 2rem;
	height: 2rem;

	border-radius: 100%;

	background-color: ${({ theme, name }) => theme.colors[name]};
`;
