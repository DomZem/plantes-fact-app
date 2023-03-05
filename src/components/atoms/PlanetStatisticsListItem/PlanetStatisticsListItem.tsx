import { FC } from 'react';
import { StyledTitle, StyleValue, Wrapper } from './PlanetStatisticsListItem.styles';

type PlanetStatisticsListItemProps = {
	title: string;
	value: string;
};

const PlanetStatisticsListItem: FC<PlanetStatisticsListItemProps> = ({ title, value }) => (
	<Wrapper as='li'>
		<StyledTitle>{title}</StyledTitle>
		<StyleValue>{value}</StyleValue>
	</Wrapper>
);

export default PlanetStatisticsListItem;
