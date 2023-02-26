import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	min-height: 100vh;

	background-color: ${({ theme }) => theme.colors.darkBlue};
	background-image: url('images/background-stars.svg');
`;
