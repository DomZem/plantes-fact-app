import { FC } from 'react';
import { Wrapper } from './SecondaryButton.styles';

type SecondaryButtonProps = {
	name: string;
	isActive: boolean;
	children: React.ReactNode;
	onClick: () => void;
};

const SecondaryButton: FC<SecondaryButtonProps> = ({ name, isActive, onClick, children }) => (
	<Wrapper as='button' name={name} isActive={isActive} onClick={onClick}>
		{children}
	</Wrapper>
);

export default SecondaryButton;
