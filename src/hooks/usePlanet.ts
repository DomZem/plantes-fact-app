import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { planetType } from './../lib/types/planet';

export const usePlanet = () => {
	const { planetName } = useParams();
	const [planet, setPlanet] = useState<planetType>();

	useEffect(() => {
		axios
			.post('/planet/', {
				searchPhrase: planetName,
			})
			.then(({ data: { planet } }) => {
				setPlanet(planet);
			});
	}, [planetName]);

	return {
		planet,
	};
};
