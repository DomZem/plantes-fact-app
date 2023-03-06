import styled from 'styled-components';
import { ViewWrapper } from '../ViewWrapper/ViewWrapper';

export const Wrapper = styled(ViewWrapper)`
	display: flex;
	align-items: center;
	justify-content: space-between;

	text-transform: uppercase;

	@media (min-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const StyledTitle = styled.h3`
	font-size: 1.3rem;
	font-weight: normal;
	letter-spacing: 1px;

	@media (min-width: 1024px) {
		font-size: 1.6rem;
	}
`;

export const StyleValue = styled.p`
	font-size: 2.5rem;
	font-family: ${({ theme }) => theme.fonts.antonio};
	color: ${({ theme }) => theme.colors.white};

	@media (min-width: 768px) {
		font-size: 2.9rem;
	}

	@media (min-width: 1024px) {
		font-size: 3.5rem;
	}
`;
