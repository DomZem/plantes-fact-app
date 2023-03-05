import PlanetStatisticsListItem from 'components/atoms/PlanetStatisticsListItem/PlanetStatisticsListItem';
import { FC } from 'react';
import { Wrapper } from './PlanetStatisticsList.styles';
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

export default PlanetStatisticsList;
