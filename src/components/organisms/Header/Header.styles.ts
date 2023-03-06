import styled from 'styled-components';

export const Wrapper = styled.header`
	position: fixed;
	top: 0;
	width: 100%;
	height: 7rem;

	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 1.5rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};

	background-color: ${({ theme }) => theme.colors.federalBlue};

	z-index: 900;

	@media (min-width: 768px) {
		height: 16rem;

		flex-direction: column;
		justify-content: space-around;

		padding-bottom: 0;
	}

	@media (min-width: 1024px) {
		height: 8.5rem;

		flex-direction: row;
		justify-content: space-between;

		padding: 0 2.5rem;
	}
`;

export const StyledTitle = styled.h1`
	font-size: 2.8rem;

	@media (min-width: 768px) {
		margin-top: 0.75em;
	}

	@media (min-width: 1024px) {
		margin-top: 0;
	}
`;
