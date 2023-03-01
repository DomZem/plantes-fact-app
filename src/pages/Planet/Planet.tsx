import axios from 'axios';
import StatisticBox from 'components/atoms/StatisticBox/StatisticBox';
import { planetType } from 'lib/types/planet';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { StyledContent, StyledDescription, StyledImage, StyledSource, StyledStatistics, StyledSwitch, StyledSwitchWrapper, StyledTitle, Wrapper } from './Planet.styles';

const Planet = () => {
	const { planetName } = useParams();
	const [planet, setPlanet] = useState<planetType>();
	const [planetContent, setPlanetContent] = useState('overview');

	useEffect(() => {
		axios
			.post('/planet/', {
				searchPhrase: planetName,
			})
			.then(({ data }) => setPlanet(data.planet));
	}, [planetName]);

	const handleSwitchContent = (e: React.MouseEvent<HTMLButtonElement>) => {
		const value = e.currentTarget.id;
		setPlanetContent(value);
	};

	return (
		<Wrapper>
			{planet && (
				<>
					<StyledSwitchWrapper>
						<StyledSwitch id='overview' onClick={handleSwitchContent}>
							overview
						</StyledSwitch>
						<StyledSwitch id='structure' onClick={handleSwitchContent}>
							structure
						</StyledSwitch>
						<StyledSwitch id='geology' onClick={handleSwitchContent}>
							surface
						</StyledSwitch>
					</StyledSwitchWrapper>
					<StyledImage src={planet.images.planet} alt={planet.name}></StyledImage>
					<StyledDescription>
						<StyledTitle>{planet.name}</StyledTitle>
						<StyledContent>{planet[planetContent].content}</StyledContent>
						<StyledSource>
							Source:
							<a href={planet.overview.source} target='_blank' rel='noreferrer'>
								Wikipedia
							</a>
						</StyledSource>
					</StyledDescription>
					<StyledStatistics>
						<StatisticBox title='rotation time' value={planet.rotation} />
						<StatisticBox title='revolution time' value={planet.revolution} />
						<StatisticBox title='radius' value={planet.radius} />
						<StatisticBox title='average temp' value={planet.temperature} />
					</StyledStatistics>
				</>
			)}
		</Wrapper>
	);
};

export default Planet;
