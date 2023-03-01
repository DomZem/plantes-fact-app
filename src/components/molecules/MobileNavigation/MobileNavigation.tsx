import ToggleButton from 'components/atoms/ToggleButton/ToggleButton';
import { ReactComponent as RightArrowIcon } from 'lib/icons/arrow-right.svg';
import { planets } from 'mocks/fixtures';
import { useState } from 'react';
import { StyledIcon, StyledLink, StyledName, Wrapper } from './MobileNavigation.styles';

const MobileNavigation = () => {
	const [showMenu, setShowMenu] = useState(false);

	const handleToggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<>
			<ToggleButton isOpen={showMenu} onHandleToggle={handleToggleMenu} />
			<Wrapper isOpen={showMenu}>
				{planets.map(({ name }) => {
					return (
						<StyledLink key={name} to={`/${name.toLowerCase()}`}>
							<StyledIcon name={name.toLocaleLowerCase()} />
							<StyledName>{name}</StyledName>
							<RightArrowIcon />
						</StyledLink>
					);
				})}
			</Wrapper>
		</>
	);
};

export default MobileNavigation;
