import axios from 'axios';
import { planetType } from 'lib/types/planet';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { StyledDescription, StyledImage, StyledStatistics, Wrapper } from './Planet.styles';

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
					<StyledImage src={planet.images.planet} alt={planet.name}></StyledImage>
					<StyledDescription>
						<h2>{planet.name}</h2>
						<p>{planet.overview.content}</p>
						<p>
							Source:
							<a href={planet.overview.source} target='_blank' rel='noreferrer'>
								Wikipedia
							</a>
						</p>
					</StyledDescription>
					<StyledStatistics>
						<div>
							<p>rotation time</p>
							<p>{planet.rotation}</p>
						</div>
						<div>
							<p>revolution time</p>
							<p>{planet.revolution}</p>
						</div>
						<div>
							<p>radius</p>
							<p>{planet.radius}</p>
						</div>
						<div>
							<p>average temp</p>
							<p>{planet.temperature}</p>
						</div>
					</StyledStatistics>
				</>
			)}
		</Wrapper>
	);
};

export default Planet;
