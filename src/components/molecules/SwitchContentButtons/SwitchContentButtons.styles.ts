import styled from 'styled-components';

export const Wrapper = styled.div`
	position: fixed;
	top: 7rem; // The same value as height of Header
	height: 5.5rem;
	left: 0;
	right: 0;

	display: flex;
	justify-content: space-between;
	gap: 1.5rem;

	padding: 0 1.5rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.slightGrey};

	background-color: ${({ theme }) => theme.colors.federalBlue};

	z-index: 800;

	@media (min-width: 768px) {
		position: static;

		flex-direction: column;
		justify-content: center;
		gap: 2rem;

		padding: 0;
		border: 0;

		grid-column: 2/3;
		grid-row: 2/3;

		background-color: transparent;

		z-index: auto;

		@media (min-width: 1024px) {
			justify-content: flex-start;
			grid-column: 2/3;
			grid-row: 3/4;
		}
	}
`;
