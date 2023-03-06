import StatisticsListItem from 'components/atoms/StatisticsListItem/StatisticsListItem';
import { FC } from 'react';
import { Wrapper } from './StatisticsList.styles';

type StatisticsListProps = {
	statistics: {
		title: string;
		value: string;
	}[];
};

const StatisticsList: FC<StatisticsListProps> = ({ statistics }) => (
	<Wrapper>
		{statistics.map(({ title, value }) => (
			<StatisticsListItem key={title} title={title} value={value} />
		))}
	</Wrapper>
);

export default StatisticsList;
