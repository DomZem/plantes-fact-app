import SourceLink from 'components/atoms/SourceLink/SourceLink';
import { FC } from 'react';
import { StyledTitle, Wrapper } from './PlanetDescription.styles';

type PlanetDescriptionProps = {
	title: string;
	content: string;
	handleHref: string;
	handleSourceName: string;
};

const PlanetDescription: FC<PlanetDescriptionProps> = ({ title, content, handleHref, handleSourceName }) => (
	<Wrapper>
		<StyledTitle>{title}</StyledTitle>
		<p>{content}</p>
		<SourceLink href={handleHref} sourceName={handleSourceName} />
	</Wrapper>
);

export default PlanetDescription;
