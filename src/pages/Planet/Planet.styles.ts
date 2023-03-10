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
		grid-template-rows: minmax(45rem, 1fr) auto auto;
	}

	@media (min-width: 1024px) {
		height: calc(100vh - 10rem);

		grid-template-columns: 65% 1fr;
		grid-template-rows: 12% minmax(auto, 33rem) minmax(auto, 1fr) auto;
	}
`;

export const StyledImageWrapper = styled.div`
	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;

	@media (min-width: 768px) {
		grid-column: 1/-1;
		grid-row: 1/2;
	}

	@media (min-width: 1024px) {
		grid-column: 1/2;
		grid-row: 2/4;
	}
`;

export const StyledImage = styled.img<{ name: string }>`
	max-height: ${({ theme, name }) => theme.planetsMaxSize[name.toLowerCase()]};
	max-width: ${({ theme, name }) => theme.planetsMaxSize[name.toLowerCase()]};
`;

export const StyledGeologyImage = styled.img`
	position: absolute;
	left: 50%;
	top: 58%;

	max-width: 15%;
	transform: translateX(-50%);

	z-index: 100;
`;
