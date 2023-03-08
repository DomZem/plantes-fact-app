import { contentType } from 'lib/types/planet';
import { planetContents } from 'pages/Planet/Planet';
import { FC } from 'react';
import { StyledButton, Wrapper } from './MobileSwitchContentButtons.styles';

type MobileSwitchContentButtonsProps = {
	name: string;
	handleSetContent: (content: contentType[number]) => void;
	content: contentType[number];
};

const MobileSwitchContentButtons: FC<MobileSwitchContentButtonsProps> = ({ name, handleSetContent, content }) => (
	<Wrapper>
		{planetContents.map((planetContent) => (
			<StyledButton isActive={content === planetContent} name={name} onClick={() => handleSetContent(planetContent)} key={planetContent}>
				{planetContent}
			</StyledButton>
		))}
	</Wrapper>
);

export default MobileSwitchContentButtons;
