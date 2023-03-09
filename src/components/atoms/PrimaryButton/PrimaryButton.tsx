import { FC } from 'react';
import { Wrapper } from './PrimaryButton.styles';

type PrimaryButtonProps = {
	name: string;
	isActive: boolean;
	children: React.ReactNode;
	onClick: () => void;
};

const PrimaryButton: FC<PrimaryButtonProps> = ({ name, isActive, onClick, children }) => (
	<Wrapper as='button' name={name} isActive={isActive} onClick={onClick}>
		{children}
	</Wrapper>
);

export default PrimaryButton;
