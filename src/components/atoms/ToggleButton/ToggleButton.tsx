import styled from 'styled-components';

const ToggleButton = (props: any) => (
	<Wrapper {...props}>
		<StyledLine />
		<StyledLine />
		<StyledLine />
	</Wrapper>
);

export const Wrapper = styled.button`
	border: none;
	background-color: transparent;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 0.4rem;
	padding: 0.5rem;
`;

export const StyledLine = styled.div`
	height: 0.3rem;
	width: 2.4rem;
	background-color: ${({ theme }) => theme.colors.white};
`;

export default ToggleButton;
