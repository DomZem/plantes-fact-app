import Description from 'components/molecules/Description/Description';
import StatisticsList from 'components/molecules/StatisticsList/StatisticsList';
import SwitchContentButtons from 'components/molecules/SwitchContentButtons/SwitchContentButtons';
import { usePlanet } from 'hooks/usePlanet';
import { contentNameType } from 'lib/types/planet';
import { useState } from 'react';
import { StyledGeologyImage, StyledImage, StyledImageWrapper, Wrapper } from './Planet.styles';

const Planet = () => {
	const { planet } = usePlanet();
	const [contentName, setContentName] = useState<contentNameType>('overview');

	console.log(planet);

	const handleSetContentName = (contentName: contentNameType) => {
		setContentName(contentName);
	};

	return (
		<Wrapper>
			{planet && (
				<>
					<SwitchContentButtons name={planet.name} contentName={contentName} handleSetContentName={handleSetContentName} />
					<StyledImageWrapper>
						<StyledImage name={planet.name} src={contentName === 'structure' ? planet.images.internal : planet.images.planet} />
						{contentName === 'geology' && <StyledGeologyImage src={planet.images.geology} />}
					</StyledImageWrapper>
					<Description title={planet.name} content={planet[contentName].content} source={planet[contentName].source} sourceName='Wikipedia' />
					<StatisticsList statistics={planet.statistics} />
				</>
			)}
		</Wrapper>
	);
};

export default Planet;
