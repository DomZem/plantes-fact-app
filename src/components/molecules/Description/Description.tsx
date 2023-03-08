import SourceLink from 'components/atoms/SourceLink/SourceLink';
import { FC } from 'react';
import { StyledTitle, Wrapper } from './Description.styles';

type DescriptionProps = {
	title: string;
	content: string;
	href: string;
	sourceName: string;
};

const Description: FC<DescriptionProps> = ({ title, content, href, sourceName }) => (
	<Wrapper>
		<StyledTitle>{title}</StyledTitle>
		<p>{content}</p>
		<SourceLink href={href} sourceName={sourceName} />
	</Wrapper>
);

export default Description;
