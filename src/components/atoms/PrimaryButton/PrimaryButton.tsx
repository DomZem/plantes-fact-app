import { FC } from 'react';
import { Wrapper } from './PrimaryButton.styles';

type PrimaryButtonProps = {
	name: string;
	isActive: boolean;
	children: React.ReactNode;
	onClick: () => void;
	spanText?: string;
};

const PrimaryButton: FC<PrimaryButtonProps> = ({ name, isActive, onClick, children, spanText }) => (
	<Wrapper as='button' name={name} isActive={isActive} onClick={onClick}>
		{spanText && <span>{spanText}</span>}
		{children}
	</Wrapper>
);

export default PrimaryButton;
