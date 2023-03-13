import PrimaryButton from 'components/atoms/PrimaryButton/PrimaryButton';
import SecondaryButton from 'components/atoms/SecondaryButton/SecondaryButton';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { contentNameType } from 'lib/types/planet';
import { FC } from 'react';
import { Wrapper } from './SwitchContentButtons.styles';

type SwitchContentButtonsProps = {
	name: string;
	contentName: contentNameType;
	handleSetContentName: (content: contentNameType) => void;
};

type contentsType = {
	value: contentNameType;
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

const SwitchContentButtons: FC<SwitchContentButtonsProps> = ({ name, contentName, handleSetContentName }) => {
	const isBreakpoint = useMediaQuery(767);

	return (
		<Wrapper>
			{contents.map(({ value, text }, index) =>
				isBreakpoint ? (
					<SecondaryButton isActive={contentName === value} name={name} onClick={() => handleSetContentName(value)} key={value}>
						{value}
					</SecondaryButton>
				) : (
					<PrimaryButton isActive={contentName === value} name={name} onClick={() => handleSetContentName(value)} spanText={`0${index + 1}`} key={value}>
						{text}
					</PrimaryButton>
				)
			)}
		</Wrapper>
	);
};

export default SwitchContentButtons;
