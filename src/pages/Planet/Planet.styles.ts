import styled from 'styled-components';

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

	@media (min-width: 1024px) {
		height: calc(100vh - 8.5rem);

		grid-template-columns: 65% 1fr;
		grid-template-rows: 10% minmax(20%, 1fr) minmax(10%, 1fr) auto;
	}
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

	@media (min-width: 1024px) {
		grid-column: 1/2;
		grid-row: 2/4;
	}
`;
