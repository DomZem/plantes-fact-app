import styled from 'styled-components';

export const Wrapper = styled.div`
	height: 100%;

	display: flex;
	justify-content: space-between;
	flex-direction: column;
	gap: 2rem;

	padding: 1.5rem;

	text-align: center;

	@media (min-width: 768px) {
		grid-column: 1/2;
		grid-row: 2/3;

		text-align: left;
	}
`;

export const StyledTitle = styled.h2`
	font-size: 4.5rem;
	letter-spacing: 1px;
	text-transform: uppercase;
`;
