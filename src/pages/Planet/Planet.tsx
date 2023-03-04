import axios from 'axios';
import PlanetDescription from 'components/molecules/PlanetDescription/PlanetDescription';
import PlanetStatisticsList from 'components/molecules/PlanetStatisticsList/PlanetStatisticsList';
import { planetType } from 'lib/types/planet';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { StyledImage, StyledMobileSwitchButton, StyledMobileSwitchWrapper, Wrapper } from './Planet.styles';

const Planet = () => {
	const { planetName } = useParams();
	const [planet, setPlanet] = useState<planetType>();

	useEffect(() => {
		axios
			.post('/planet/', {
				searchPhrase: planetName,
			})
			.then(({ data }) => setPlanet(data.planet));
	}, [planetName]);

	return (
		<Wrapper>
			{planet && (
				<>
					<StyledMobileSwitchWrapper>
						<StyledMobileSwitchButton as='button' name={planet.name}>
							content
						</StyledMobileSwitchButton>
						<StyledMobileSwitchButton as='button' name={planet.name}>
							overview
						</StyledMobileSwitchButton>
						<StyledMobileSwitchButton as='button' name={planet.name}>
							structure
						</StyledMobileSwitchButton>
					</StyledMobileSwitchWrapper>
					<StyledImage id={planet.name} src={planet.images.planet} alt={planet.name} />
					<PlanetDescription title={planet.name} content={planet['structure'].content} handleHref={planet['overview'].source} handleSourceName='Wikipedia' />
					<PlanetStatisticsList statistics={planet.statistics} />
				</>
			)}
		</Wrapper>
	);
};

export default Planet;
