import { planets } from 'mocks/fixtures';

import { PlanetLink, Wrapper } from './DesktopNavigation.styles';

const DesktopNavigation = () => (
	<Wrapper>
		{planets.map(({ name }) => (
			<PlanetLink to={`/${name.toLowerCase()}`} name={name.toLowerCase()} key={name}>
				{name}
			</PlanetLink>
		))}
	</Wrapper>
);

export default DesktopNavigation;
