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

export const StyledTitle = styled.p`
	font-size: 1.3rem;
`;

export const StyleValue = styled.h3`
	font-size: 2.5rem;
	font-weight: 400;
`;
