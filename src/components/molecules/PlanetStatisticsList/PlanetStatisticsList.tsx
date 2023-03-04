import PlanetStatisticsListItem from 'components/atoms/PlanetStatisticsListItem/PlanetStatisticsListItem';
import { FC } from 'react';
import styled from 'styled-components';

type PlanetStatisticsListProps = {
	statistics: {
		title: string;
		value: string;
	}[];
};

const PlanetStatisticsList: FC<PlanetStatisticsListProps> = ({ statistics }) => (
	<Wrapper>
		{statistics.map(({ title, value }) => (
			<PlanetStatisticsListItem key={title} title={title} value={value} />
		))}
	</Wrapper>
);

export const Wrapper = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	padding: 1.5rem;
`;

export default PlanetStatisticsList;
