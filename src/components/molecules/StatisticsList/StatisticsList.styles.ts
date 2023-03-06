import styled from 'styled-components';

export const Wrapper = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
	gap: 2rem;

	padding: 1.5rem;

	@media (min-width: 768px) {
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));

		grid-column: 1/-1;
		grid-row: 3/4;
	}

	@media (min-width: 1024px) {
		grid-row: 4/5;
	}
`;
