import PrimaryButton from 'components/atoms/PrimaryButton/PrimaryButton';
import SecondaryButton from 'components/atoms/SecondaryButton/SecondaryButton';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { contentType } from 'lib/types/planet';
import { FC } from 'react';
import { Wrapper } from './SwitchContentButtons.styles';

type SwitchContentButtonsProps = {
	name: string;
	content: contentType;
	handleSetContent: (content: contentType) => void;
};

type contentsType = {
	value: contentType;
	text: string;
};

const contents: contentsType[] = [
	{
		value: 'overview',
		text: 'overview',
	},
	{
		value: 'structure',
		text: 'internal structure',
	},
	{
		value: 'geology',
		text: 'surface geology',
	},
];

const SwitchContentButtons: FC<SwitchContentButtonsProps> = ({ name, content, handleSetContent }) => {
	const isBreakpoint = useMediaQuery(767);

	return (
		<Wrapper>
			{contents.map(({ value, text }, index) =>
				isBreakpoint ? (
					<SecondaryButton isActive={content === value} name={name} onClick={() => handleSetContent(value)} key={value}>
						{value}
					</SecondaryButton>
				) : (
					<PrimaryButton isActive={content === value} name={name} onClick={() => handleSetContent(value)} key={value} spanText={`0${index + 1}`}>
						{text}
					</PrimaryButton>
				)
			)}
		</Wrapper>
	);
};

export default SwitchContentButtons;
