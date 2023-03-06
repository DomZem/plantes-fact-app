import { contentNamesType } from 'lib/types/planet';
import { FC } from 'react';
import { StyledButton, Wrapper } from './DesktopSwitchContentButtons.styles';

type DesktopSwitchContentButtonsProps = {
	contentName: contentNamesType[number];
	handleName: string;
	handleSetContentName: (contentName: contentNamesType[number]) => void;
};

const DesktopSwitchContentButtons: FC<DesktopSwitchContentButtonsProps> = ({ handleName, contentName, handleSetContentName }) => (
	<Wrapper>
		<StyledButton isActive={contentName === 'overview'} name={handleName} onClick={() => handleSetContentName('overview')} as='button'>
			<span>01</span>
			overview
		</StyledButton>

		<StyledButton isActive={contentName === 'structure'} name={handleName} onClick={() => handleSetContentName('structure')} as='button'>
			<span>02</span>
			internal structure
		</StyledButton>

		<StyledButton isActive={contentName === 'geology'} name={handleName} onClick={() => handleSetContentName('geology')} as='button'>
			<span>03</span>
			surface geology
		</StyledButton>
	</Wrapper>
);

export default DesktopSwitchContentButtons;
