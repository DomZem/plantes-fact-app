import { BorderBottomHover } from 'components/atoms/BorderBottomHover/BorderBottomHover';
import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: 1110px;

	padding-top: 5.5rem; // The same value as StyledMobileSwitchWrapper height

	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows:
		minmax(auto, calc(45vh - 7.25rem))
		minmax(auto, calc(55vh - 7.25rem)); // (Height of Header + height of StyledMobileSwitchWrapper + gap) / 2
	gap: 2rem;
`;
export const StyledMobileSwitchWrapper = styled.div`
	position: fixed;
	top: 7rem; // The same value as height of Header
	height: 5.5rem;
	width: 100%;

	display: flex;
	justify-content: space-between;
	gap: 1rem;

	padding: 0 1.5rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};

	background-color: ${({ theme }) => theme.colors.background};

	z-index: 800;
`;

export const StyledMobileSwitchButton = styled(BorderBottomHover)<{ name: string }>`
	padding: 0.75em 0;
	border: none;
	background-color: transparent;

	font-size: 1.3rem;
	font-weight: bold;
	letter-spacing: 1px;
	text-transform: uppercase;
`;

export const StyledImage = styled.img<{ id: string }>`
	max-width: ${({ theme, id }) => theme.planetsMaxWidth.mobile[id.toLowerCase()]};
	// Every planet have different max-width because that mirrors its size in the solar system

	padding: 2rem;

	align-self: center;
	justify-self: center;
`;
