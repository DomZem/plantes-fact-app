import ToggleButton from 'components/atoms/ToggleButton/ToggleButton';
import { planets } from 'lib/constants';
import { ReactComponent as RightArrowIcon } from 'lib/icons/icon-arrow-right.svg';
import { useState } from 'react';
import { StyledIcon, StyledLink, StyledName, Wrapper } from './MobileNavigation.styles';

const MobileNavigation = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleToggleMenu = () => {
		setIsMenuOpen((prevState) => !prevState);
	};

	return (
		<>
			<ToggleButton isOpen={isMenuOpen} onClick={handleToggleMenu} />
			<Wrapper isMenuOpen={isMenuOpen}>
				{planets.map((name) => {
					return (
						<StyledLink key={name} to={`/${name}`}>
							<StyledIcon name={name} />
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
