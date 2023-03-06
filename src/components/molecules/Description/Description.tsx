import SourceLink from 'components/atoms/SourceLink/SourceLink';
import { FC } from 'react';
import { StyledTitle, Wrapper } from './Description.styles';

type DescriptionProps = {
	title: string;
	content: string;
	handleHref: string;
	handleSourceName: string;
};

const Description: FC<DescriptionProps> = ({ title, content, handleHref, handleSourceName }) => (
	<Wrapper>
		<StyledTitle>{title}</StyledTitle>
		<p>{content}</p>
		<SourceLink href={handleHref} sourceName={handleSourceName} />
	</Wrapper>
);

export default Description;
