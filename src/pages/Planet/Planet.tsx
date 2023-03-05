import PlanetDescription from 'components/molecules/PlanetDescription/PlanetDescription';
import PlanetStatisticsList from 'components/molecules/PlanetStatisticsList/PlanetStatisticsList';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { usePlanet } from 'hooks/usePlanet';
import { contentNamesType } from 'lib/types/planet';
import { useState } from 'react';
import { StyledImage, StyledMobileSwitchButton, StyledMobileSwitchWrapper, Wrapper } from './Planet.styles';

const planetContents: contentNamesType = ['overview', 'structure', 'geology'];

const Planet = () => {
	const { planet } = usePlanet();
	const [contentName, setContentName] = useState<contentNamesType[number]>('overview');
	const isBreakpoint = useMediaQuery(767);

	return (
		<Wrapper>
			{planet && (
				<>
					{isBreakpoint ? (
						<StyledMobileSwitchWrapper>
							{planetContents.map((planetContent) => (
								<StyledMobileSwitchButton key={planetContent} as='button' name={planet.name} onClick={() => setContentName(planetContent)}>
									{planetContent}
								</StyledMobileSwitchButton>
							))}
						</StyledMobileSwitchWrapper>
					) : null}
					<StyledImage id={planet.name} src={planet.images.planet} alt={planet.name} />
					<PlanetDescription title={planet.name} content={planet[contentName].content} handleHref={planet[contentName].source} handleSourceName='Wikipedia' />
					<PlanetStatisticsList statistics={planet.statistics} />
				</>
			)}
		</Wrapper>
	);
};

export default Planet;
