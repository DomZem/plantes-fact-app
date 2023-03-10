import Description from 'components/molecules/Description/Description';
import StatisticsList from 'components/molecules/StatisticsList/StatisticsList';
import SwitchContentButtons from 'components/molecules/SwitchContentButtons/SwitchContentButtons';
import { usePlanet } from 'hooks/usePlanet';
import { contentType } from 'lib/types/planet';
import { useState } from 'react';
import { StyledGeologyImage, StyledImage, StyledImageWrapper, Wrapper } from './Planet.styles';

const Planet = () => {
	const { planet } = usePlanet();
	const [content, setContent] = useState<contentType>('overview');

	const handleSetContent = (content: contentType) => {
		setContent(content);
	};

	return (
		<Wrapper>
			{planet && (
				<>
					<SwitchContentButtons name={planet.name} content={content} handleSetContent={handleSetContent} />
					<StyledImageWrapper>
						<StyledImage name={planet.name} src={content === 'structure' ? planet.images.internal : planet.images.planet} />
						{content === 'geology' && <StyledGeologyImage src={planet.images.geology} />}
					</StyledImageWrapper>
					<Description title={planet.name} content={planet[content].content} href={planet[content].source} sourceName='Wikipedia' />
					<StatisticsList statistics={planet.statistics} />
				</>
			)}
		</Wrapper>
	);
};

export default Planet;
