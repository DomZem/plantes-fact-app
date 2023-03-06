import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { contentNamesType } from 'lib/types/planet';
import { FC } from 'react';
import styled from 'styled-components';

type DesktopSwitchContentButtonsProps = {
	handleName: string;
	handleSetContentName: (contentName: contentNamesType[number]) => void;
};

const DesktopSwitchContentButtons: FC<DesktopSwitchContentButtonsProps> = ({ handleName, handleSetContentName }) => (
	<Wrapper>
		<StyledButton name={handleName} onClick={() => handleSetContentName('overview')} as='button'>
			01
			<span>overview</span>
		</StyledButton>

		<StyledButton name={handleName} onClick={() => handleSetContentName('structure')} as='button'>
			02
			<span>internal structure</span>
		</StyledButton>

		<StyledButton name={handleName} onClick={() => handleSetContentName('geology')} as='button'>
			03
			<span>surface geology</span>
		</StyledButton>
	</Wrapper>
);

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;

	padding: 1.5rem;

	grid-column: 2/3;
	grid-row: 2/3;

	@media (min-width: 768px) {
		justify-content: flex-start;
		grid-column: 2/3;
		grid-row: 3/4;
	}
`;

export const StyledButton = styled(ViewWrapper)<{ name: string }>`
	font-size: 1.4rem;
	font-weight: bold;
	text-transform: uppercase;
	text-align: left;
	letter-spacing: 1px;

	cursor: pointer;

	span {
		margin-left: 1rem;
	}

	&:hover {
		background-color: ${({ theme, name }) => theme.colors[name.toLowerCase()]};
	}
`;

export default DesktopSwitchContentButtons;
