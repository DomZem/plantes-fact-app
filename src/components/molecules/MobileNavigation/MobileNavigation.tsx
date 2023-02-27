import { ReactComponent as RightArrowIcon } from 'lib/icons/arrow-right.svg';
import { ReactComponent as HamburgerIcon } from 'lib/icons/icon-hamburger.svg';
import { planets } from 'mocks/fixtures';
import { useState } from 'react';
import { MenuToggleButton, PlanetIcon, PlanetLink, PlanetName, Wrapper } from './MobileNavigation.styles';

const MobileNavigation = () => {
	const [showMenu, setShowMenu] = useState(false);

	let menu;

	if (showMenu) {
		menu = (
			<Wrapper>
				{planets.map(({ name }) => (
					<PlanetLink key={name} to={`/${name.toLowerCase()}`}>
						<PlanetIcon name={name.toLocaleLowerCase()} />
						<PlanetName>{name}</PlanetName>
						<RightArrowIcon />
					</PlanetLink>
				))}
			</Wrapper>
		);
	}

	return (
		<>
			<MenuToggleButton onClick={() => setShowMenu(!showMenu)}>
				<HamburgerIcon />
			</MenuToggleButton>
			{menu}
		</>
	);
};

export default MobileNavigation;
