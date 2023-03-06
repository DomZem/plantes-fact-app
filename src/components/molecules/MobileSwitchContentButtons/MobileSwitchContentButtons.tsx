import { contentNamesType } from 'lib/types/planet';
import { planetContents } from 'pages/Planet/Planet';
import { FC } from 'react';
import { StyledButton, Wrapper } from './MobileSwitchContentButtons.styles';

type MobileSwitchContentButtonsProps = {
	handleName: string;
	handleSetContentName: (contentName: contentNamesType[number]) => void;
};

const MobileSwitchContentButtons: FC<MobileSwitchContentButtonsProps> = ({ handleName, handleSetContentName }) => (
	<Wrapper>
		{planetContents.map((planetContent) => (
			<StyledButton name={handleName} onClick={() => handleSetContentName(planetContent)} key={planetContent}>
				{planetContent}
			</StyledButton>
		))}
	</Wrapper>
);

export default MobileSwitchContentButtons;
