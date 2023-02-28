import { planets } from 'mocks/fixtures';

import { StyledLink, Wrapper } from './DesktopNavigation.styles';

const DesktopNavigation = () => (
	<Wrapper>
		{planets.map(({ name }) => (
			<StyledLink to={`/${name.toLowerCase()}`} name={name.toLowerCase()} key={name}>
				{name}
			</StyledLink>
		))}
	</Wrapper>
);

export default DesktopNavigation;
