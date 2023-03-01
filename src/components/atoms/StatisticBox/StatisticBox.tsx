import { FC } from 'react';
import styled from 'styled-components';

type StatisticBoxProps = {
	title: string;
	value: string | number;
};

export const StatisticBox: FC<StatisticBoxProps> = ({ title, value }) => (
	<Wrapper>
		<StyledTitle>{title}</StyledTitle>
		<StyledValue>{value}</StyledValue>
	</Wrapper>
);

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 1em;
	border: 1px solid rgba(151, 151, 151, 0.35);
`;

export const StyledTitle = styled.p`
	text-transform: uppercase;
`;

export const StyledValue = styled.p`
	font-family: ${({ theme }) => theme.fonts.antonio};
	font-size: 2.2rem;
	text-transform: uppercase;
`;

export default StatisticBox;
