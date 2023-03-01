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
	border-bottom: 1px solid rgba(151, 151, 151, 0.35);

	background-color: ${({ theme }) => theme.colors.darkBlue};

	z-index: 900;

	@media (min-width: 768px) {
		height: 16rem;

		flex-direction: column;
		justify-content: space-around;

		nav a {
			padding: 1rem;
		}
	}

	@media (min-width: 1024px) {
		height: 8.5rem;

		flex-direction: row;
		justify-content: space-between;

		padding: 0 2.5rem;

		nav {
			height: 100%;
			flex-basis: 50%;

			a {
				height: 100%;
				padding: 0;
			}
		}
	}
`;

export const StyledTitle = styled.h1`
	font-size: 2.8rem;
	text-transform: uppercase;
`;
