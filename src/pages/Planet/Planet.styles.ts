import { BorderBottomHover } from 'components/atoms/BorderBottomHover/BorderBottomHover';
import styled from 'styled-components';

export const StyledMobileSwitchWrapper = styled.div`
	position: fixed;
	top: 7rem; // The same value as height of Header
	height: 5.5rem;
	width: 100%;

	display: flex;
	justify-content: space-between;
	gap: 1.5rem;

	padding: 0 1.5rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};

	background-color: ${({ theme }) => theme.colors.background};

	z-index: 800;
`;

export const StyledMobileSwitchButton = styled(BorderBottomHover)<{ name: string }>`
	padding: 0.75em 0;
	border: none;
	background-color: transparent;

	font-size: 1.3rem;
	font-weight: bold;
	letter-spacing: 1px;
	text-transform: uppercase;

	cursor: pointer;
`;

export const StyledImage = styled.img<{ id: string }>`
	max-height: ${({ theme, id }) => theme.planetsMaxWidth.mobile[id.toLowerCase()]};
	// Every planet have different max-height because that mirrors its size in the solar system

	align-self: center;
	justify-self: center;

	@media (min-width: 768px) {
		grid-column: 1/-1;
		grid-row: 1/2;
	}
`;

export const Wrapper = styled.div`
	max-width: 1110px;
	padding-top: 5.5rem; // The same value as StyledMobileSwitchWrapper height

	display: grid;

	height: calc(100vh - 12.5rem);

	grid-template-columns: 1fr;
	grid-auto-rows: minmax(50%, 1fr) auto auto;
	gap: 2rem;

	@media (min-width: 768px) {
		padding: 0;

		height: calc(100vh - 16rem);

		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: minmax(35%, 1fr) auto auto;
	}
`;
