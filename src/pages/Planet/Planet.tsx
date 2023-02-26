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

	return <Wrapper>Witaj znajdujesz się na planecie {`${planetName}`}</Wrapper>;
};

export const Wrapper = styled.div`
	max-width: 1110px;
	margin: 0 auto;
`;

export default Planet;
