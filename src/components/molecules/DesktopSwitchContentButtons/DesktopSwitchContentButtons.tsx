import { contentType } from 'lib/types/planet';
import { FC } from 'react';
import { StyledButton, Wrapper } from './DesktopSwitchContentButtons.styles';

type DesktopSwitchContentButtonsProps = {
	content: contentType[number];
	name: string;
	handleSetContent: (content: contentType[number]) => void;
};

const DesktopSwitchContentButtons: FC<DesktopSwitchContentButtonsProps> = ({ name, content, handleSetContent }) => (
	<Wrapper>
		<StyledButton isActive={content === 'overview'} name={name} onClick={() => handleSetContent('overview')} as='button'>
			<span>01</span>
			overview
		</StyledButton>

		<StyledButton isActive={content === 'structure'} name={name} onClick={() => handleSetContent('structure')} as='button'>
			<span>02</span>
			internal structure
		</StyledButton>

		<StyledButton isActive={content === 'geology'} name={name} onClick={() => handleSetContent('geology')} as='button'>
			<span>03</span>
			surface geology
		</StyledButton>
	</Wrapper>
);

export default DesktopSwitchContentButtons;
