import styled from 'styled-components';

export const Wrapper = styled.header`
	height: 80px;

	padding: 0 3rem;

	border-bottom: 1px solid #979797;

	display: flex;
	justify-content: space-between;
	align-items: center;

	background-color: transparent;
`;

export const Title = styled.h1`
	font-size: 2.8rem;
	text-transform: uppercase;
`;

export const DesktopNavigation = styled.nav`
	height: 100%;
	flex-basis: 50%;

	display: flex;
	justify-content: space-between;
	align-items: center;

	a {
		text-transform: uppercase;
	}
`;
