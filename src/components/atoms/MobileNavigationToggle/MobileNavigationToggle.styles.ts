import styled from 'styled-components';

export const Wrapper = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	gap: 4px;

	border: none;

	background: transparent;

	cursor: pointer;

	&:focus {
		outline: none;
	}
`;

export const Line = styled.div`
	width: 24px;
	height: 3px;
	background: ${({ theme }) => theme.colors.white};
`;
