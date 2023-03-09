import Description from 'components/molecules/Description/Description';
import StatisticsList from 'components/molecules/StatisticsList/StatisticsList';
import SwitchContentButtons from 'components/molecules/SwitchContentButtons/SwitchContentButtons';
import { usePlanet } from 'hooks/usePlanet';
import { contentType } from 'lib/types/planet';
import { useState } from 'react';
import { StyledImage, Wrapper } from './Planet.styles';

export const planetContents: contentType = ['overview', 'structure', 'geology'];

const Planet = () => {
	const { planet } = usePlanet();
	const [content, setContent] = useState<contentType[number]>('overview');

	const handleSetContent = (content: contentType[number]) => {
		setContent(content);
	};

	return (
		<Wrapper>
			{planet && (
				<>
					<SwitchContentButtons name={planet.name} content={content} handleSetContent={handleSetContent} />
					<StyledImage id={planet.name} src={planet.images.planet} alt={planet.name} />
					<Description title={planet.name} content={planet[content].content} href={planet[content].source} sourceName='Wikipedia' />
					<StatisticsList statistics={planet.statistics} />
				</>
			)}
		</Wrapper>
	);
};

export default Planet;
