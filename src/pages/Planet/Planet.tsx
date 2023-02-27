import axios from 'axios';
import { planetType } from 'lib/types/planet';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

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
					<PlanetContent>
						{/* <PlanetImage src={planet.images.planet} /> */}
						<PlanetDescription>{/* <h2>Welcome to {planet.name}</h2> */}</PlanetDescription>
					</PlanetContent>
					<PlanetStatistics></PlanetStatistics>
				</>
			)}
		</Wrapper>
	);
};

export const Wrapper = styled.div`
	max-width: 1110px;
	width: 100%;
`;

export const PlanetContent = styled.div``;

export const PlanetImage = styled.img``;

export const PlanetDescription = styled.div``;

export const PlanetStatistics = styled.div``;
export default Planet;
