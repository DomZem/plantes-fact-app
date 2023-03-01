import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 1110px;

	display: grid;
	grid-template-rows: auto 30% 30% 1fr;
	align-items: center;
	gap: 2rem;
`;

export const StyledSwitchWrapper = styled.div`
	display: flex;
	justify-content: space-between;

	border-bottom: 1px solid rgba(151, 151, 151, 0.35);
	padding: 0 1.5rem;
`;

export const StyledSwitch = styled.button`
	text-transform: uppercase;
	font-size: 1.2rem;
	padding: 1.2em 0;
	font-family: ${({ theme }) => theme.fonts.spartan};
	letter-spacing: 1px;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.white};
	background-color: transparent;
	border: none;
`;

export const StyledImage = styled.img`
	align-self: center;
	justify-self: center;
	max-width: 30%;
`;

export const StyledDescription = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	padding: 0 1.5rem;

	text-align: center;
`;

export const StyledTitle = styled.h2`
	font-size: 4rem;
	text-transform: uppercase;
	letter-spacing: 1px;
`;

export const StyledContent = styled.p`
	line-height: 1.6;
`;

export const StyledSource = styled.p``;

export const StyledStatistics = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	padding: 0 1.5rem;
`;
