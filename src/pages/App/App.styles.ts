import styled from 'styled-components';

export const Main = styled.main`
	display: flex;
	justify-content: center;

	padding: 1.5rem;
	padding-top: 7rem; // The same value as header height

	@media (min-width: 768px) {
		padding-top: 16rem;
	}

	@media (min-width: 1024px) {
		padding-top: 8.5rem;
	}
`;
