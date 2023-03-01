import { FC } from 'react';
import { StyledLine, Wrapper } from './ToggleButton.styles';

type ToggleButtonProps = {
	isOpen: boolean;
	onHandleToggle(): void;
};

const ToggleButton: FC<ToggleButtonProps> = ({ isOpen, onHandleToggle }) => (
	<Wrapper isOpen={isOpen} onClick={onHandleToggle}>
		<StyledLine />
		<StyledLine />
		<StyledLine />
	</Wrapper>
);

export default ToggleButton;
