import { FC } from 'react';
import { StyledTitle, StyleValue, Wrapper } from './StatisticsListItem.styles';

type StatisticsListItemProps = {
	title: string;
	value: string;
};

const StatisticsListItem: FC<StatisticsListItemProps> = ({ title, value }) => (
	<Wrapper as='li'>
		<StyledTitle>{title}</StyledTitle>
		<StyleValue>{value}</StyleValue>
	</Wrapper>
);

export default StatisticsListItem;
