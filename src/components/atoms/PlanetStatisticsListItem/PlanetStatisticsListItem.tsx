import { FC } from 'react';
import styled from 'styled-components';
import { ViewWrapper } from '../ViewWrapper/ViewWrapper';

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

export const Wrapper = styled(ViewWrapper)`
	display: flex;
	align-items: center;
	justify-content: space-between;

	text-transform: uppercase;
`;

export const StyledTitle = styled.p`
	font-size: 1.3rem;
`;

export const StyleValue = styled.h3`
	font-size: 2.5rem;
	font-weight: 400;
`;

export default PlanetStatisticsListItem;
