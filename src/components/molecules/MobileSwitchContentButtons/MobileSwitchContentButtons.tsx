import { contentNamesType } from 'lib/types/planet';
import { planetContents } from 'pages/Planet/Planet';
import { FC } from 'react';
import { StyledButton, Wrapper } from './MobileSwitchContentButtons.styles';

type MobileSwitchContentButtonsProps = {
	handleName: string;
	handleSetContentName: (contentName: contentNamesType[number]) => void;
	contentName: contentNamesType[number];
};

const MobileSwitchContentButtons: FC<MobileSwitchContentButtonsProps> = ({ handleName, handleSetContentName, contentName }) => (
	<Wrapper>
		{planetContents.map((planetContent) => (
			<StyledButton isActive={contentName === planetContent} name={handleName} onClick={() => handleSetContentName(planetContent)} key={planetContent}>
				{planetContent}
			</StyledButton>
		))}
	</Wrapper>
);

export default MobileSwitchContentButtons;
