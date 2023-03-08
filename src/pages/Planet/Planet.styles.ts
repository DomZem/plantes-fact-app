import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 1110px;
	padding-top: 5.5rem; // The same value as MobileSwitchContentButtons height

	display: grid;

	height: calc(100vh - 8.5rem);

	grid-template-columns: 1fr;
	grid-template-rows: minmax(30.4rem, 1fr) auto auto;
	gap: 2rem;

	@media (min-width: 768px) {
		padding: 0;

		height: calc(100vh - 17.5rem);

		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: minmax(46.2rem, 1fr) auto auto;
	}

	@media (min-width: 1024px) {
		height: calc(100vh - 10rem);

		grid-template-columns: 65% 1fr;
		grid-template-rows: 12% minmax(auto, 33rem) minmax(auto, 1fr) auto;
	}
`;

export const StyledImage = styled.img<{ id: string }>`
	max-height: ${({ theme, id }) => theme.planetsMaxWidth[id.toLowerCase()]};
	// Every planet have different max-height because that mirrors its size in the solar system

	max-width: 100%;

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
