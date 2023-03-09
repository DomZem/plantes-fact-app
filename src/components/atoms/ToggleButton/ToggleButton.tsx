import { FC } from 'react';
import { StyledLine, Wrapper } from './ToggleButton.styles';

type ToggleButtonProps = {
	isOpen: boolean;
	onClick(): void;
};

const ToggleButton: FC<ToggleButtonProps> = ({ isOpen, onClick }) => (
	<Wrapper isOpen={isOpen} onClick={onClick}>
		<StyledLine />
		<StyledLine />
		<StyledLine />
	</Wrapper>
);

export default ToggleButton;
