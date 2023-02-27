import { ReactComponent as RightArrowIcon } from 'lib/icons/arrow-right.svg';
import { planets } from 'mocks/fixtures';
import { NavLink } from 'react-router-dom';
import { LinksList, LinksListItem, PlanetIcon, Wrapper } from './MobileNavigation.styles';
const MobileNavigation = () => (
	<Wrapper>
		<LinksList>
			{planets.map((planet) => (
				<LinksListItem key={planet.name}>
					<PlanetIcon name={planet.name.toLowerCase()} />
					<NavLink to={`/${planet.name.toLowerCase()}`}>{planet.name}</NavLink>
					<RightArrowIcon />
				</LinksListItem>
			))}
		</LinksList>
	</Wrapper>
);

export default MobileNavigation;
