import { planets } from 'lib/constants';
import { StyledLink, Wrapper } from './DesktopNavigation.styles';

const DesktopNavigation = () => (
	<Wrapper>
		{planets.map((name) => (
			<StyledLink to={`/${name}`} name={name} key={name}>
				{name}
			</StyledLink>
		))}
	</Wrapper>
);

export default DesktopNavigation;
