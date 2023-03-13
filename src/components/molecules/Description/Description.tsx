import SourceLink from 'components/atoms/SourceLink/SourceLink';
import { FC } from 'react';
import { StyledTitle, Wrapper } from './Description.styles';

type DescriptionProps = {
	title: string;
	content: string;
	source: string;
	sourceName: string;
};

const Description: FC<DescriptionProps> = ({ title, content, source, sourceName }) => (
	<Wrapper>
		<StyledTitle>{title}</StyledTitle>
		<p>{content}</p>
		<SourceLink source={source} sourceName={sourceName} />
	</Wrapper>
);

export default Description;
