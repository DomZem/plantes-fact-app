import { FC } from 'react';
import { StyledLine, Wrapper } from './ToggleButton.styles';

type ToggleButtonProps = {
	isOpen: boolean;
	handleToggle(): void;
};

const ToggleButton: FC<ToggleButtonProps> = ({ isOpen, handleToggle }) => (
	<Wrapper isOpen={isOpen} onClick={handleToggle}>
		<StyledLine />
		<StyledLine />
		<StyledLine />
	</Wrapper>
);

export default ToggleButton;
