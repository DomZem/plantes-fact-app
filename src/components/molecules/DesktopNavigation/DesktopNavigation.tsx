import { planets } from 'mocks/fixtures';
import { NavLink } from 'react-router-dom';
import { LinksList, LinksListItem, Wrapper } from './DesktopNavigation.styles';

const DesktopNavigation = () => (
	<Wrapper>
		<LinksList>
			{planets.map((planet) => (
				<LinksListItem key={planet.name}>
					<NavLink to={`/${planet.name.toLowerCase()}`}>{planet.name}</NavLink>
				</LinksListItem>
			))}
		</LinksList>
	</Wrapper>
);

export default DesktopNavigation;
