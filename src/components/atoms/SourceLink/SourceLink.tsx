import { ReactComponent as SourceIcon } from 'lib/icons/icon-source.svg';
import { FC } from 'react';
import { StyledLink, Wrapper } from './SourceLink.styles';

type SourceLinkProps = {
	text?: string;
	sourceName: string;
	href: string;
};

const SourceLink: FC<SourceLinkProps> = ({ href, text = 'source', sourceName }) => {
	return (
		<Wrapper>
			{text}:
			<StyledLink href={href} target='_blank' rel='noreferrer'>
				{sourceName}
				<SourceIcon />
			</StyledLink>
		</Wrapper>
	);
};

export default SourceLink;
