import Description from 'components/molecules/Description/Description';
import DesktopSwitchContentButtons from 'components/molecules/DesktopSwitchContentButtons/DesktopSwitchContentButtons';
import MobileSwitchContentButtons from 'components/molecules/MobileSwitchContentButtons/MobileSwitchContentButtons';
import StatisticsList from 'components/molecules/StatisticsList/StatisticsList';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { usePlanet } from 'hooks/usePlanet';
import { contentNamesType } from 'lib/types/planet';
import { useState } from 'react';
import { StyledImage, Wrapper } from './Planet.styles';

export const planetContents: contentNamesType = ['overview', 'structure', 'geology'];

const Planet = () => {
	const { planet } = usePlanet();
	const [contentName, setContentName] = useState<contentNamesType[number]>('overview');
	const isBreakpoint = useMediaQuery(767);

	const handleSetContentName = (contentName: contentNamesType[number]) => {
		setContentName(contentName);
	};

	return (
		<Wrapper>
			{planet && (
				<>
					{isBreakpoint ? (
						<MobileSwitchContentButtons handleName={planet.name} contentName={contentName} handleSetContentName={handleSetContentName} />
					) : (
						<DesktopSwitchContentButtons handleName={planet.name} contentName={contentName} handleSetContentName={handleSetContentName} />
					)}
					<StyledImage id={planet.name} src={planet.images.planet} alt={planet.name} />
					<Description title={planet.name} content={planet[contentName].content} handleHref={planet[contentName].source} handleSourceName='Wikipedia' />
					<StatisticsList statistics={planet.statistics} />
				</>
			)}
		</Wrapper>
	);
};

export default Planet;
