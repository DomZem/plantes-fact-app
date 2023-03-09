import PrimaryButton from 'components/atoms/PrimaryButton/PrimaryButton';
import SecondaryButton from 'components/atoms/SecondaryButton/SecondaryButton';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { contentType } from 'lib/types/planet';
import { FC } from 'react';
import { Wrapper } from './SwitchContentButtons.styles';

type SwitchContentButtonsProps = {
	name: string;
	content: contentType[number];
	handleSetContent: (content: contentType[number]) => void;
};

const SwitchContentButtons: FC<SwitchContentButtonsProps> = ({ name, content, handleSetContent }) => {
	const isBreakpoint = useMediaQuery(767);

	return (
		<Wrapper>
			{isBreakpoint ? (
				<>
					<SecondaryButton isActive={content === 'overview'} name={name} onClick={() => handleSetContent('overview')}>
						overview
					</SecondaryButton>
					<SecondaryButton isActive={content === 'structure'} name={name} onClick={() => handleSetContent('structure')}>
						structure
					</SecondaryButton>
					<SecondaryButton isActive={content === 'geology'} name={name} onClick={() => handleSetContent('geology')}>
						geology
					</SecondaryButton>
				</>
			) : (
				<>
					<PrimaryButton isActive={content === 'overview'} name={name} onClick={() => handleSetContent('overview')}>
						<span>01</span>
						overview
					</PrimaryButton>
					<PrimaryButton isActive={content === 'structure'} name={name} onClick={() => handleSetContent('structure')}>
						<span>02</span>
						internal structure
					</PrimaryButton>
					<PrimaryButton isActive={content === 'geology'} name={name} onClick={() => handleSetContent('geology')}>
						<span>03</span>
						surface geology
					</PrimaryButton>
				</>
			)}
		</Wrapper>
	);
};

export default SwitchContentButtons;
