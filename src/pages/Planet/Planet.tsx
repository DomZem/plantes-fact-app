import PlanetDescription from 'components/molecules/PlanetDescription/PlanetDescription';
import PlanetStatisticsList from 'components/molecules/PlanetStatisticsList/PlanetStatisticsList';
import { usePlanet } from 'hooks/usePlanet';
import { contentNamesType } from 'lib/types/planet';
import { useState } from 'react';
import { StyledImage, StyledMobileSwitchButton, StyledMobileSwitchWrapper, Wrapper } from './Planet.styles';

const Planet = () => {
	const { planet } = usePlanet();
	const [contentName, setContentName] = useState<contentNamesType[number]>('overview');

	return (
		<Wrapper>
			{planet && (
				<>
					<StyledMobileSwitchWrapper>
						<StyledMobileSwitchButton as='button' name={planet.name} onClick={() => setContentName('overview')}>
							overview
						</StyledMobileSwitchButton>
						<StyledMobileSwitchButton as='button' name={planet.name} onClick={() => setContentName('geology')}>
							geology
						</StyledMobileSwitchButton>
						<StyledMobileSwitchButton as='button' name={planet.name} onClick={() => setContentName('structure')}>
							structure
						</StyledMobileSwitchButton>
					</StyledMobileSwitchWrapper>
					<StyledImage id={planet.name} src={planet.images.planet} alt={planet.name} />
					<PlanetDescription title={planet.name} content={planet[contentName].content} handleHref={planet[contentName].source} handleSourceName='Wikipedia' />
					<PlanetStatisticsList statistics={planet.statistics} />
				</>
			)}
		</Wrapper>
	);
};

export default Planet;
