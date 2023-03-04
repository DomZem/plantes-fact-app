import styled from 'styled-components';

export const ViewWrapper = styled.div`
	padding: 1em;
	border: 1px solid ${({ theme }) => theme.colors.border};

	background-color: ${({ theme }) => theme.colors.background};
`;
