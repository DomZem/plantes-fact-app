import DesktopNavigation from 'components/molecules/DesktopNavigation/DesktopNavigation';
import MobileNavigation from 'components/molecules/MobileNavigation/MobileNavigation';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { StyledTitle, Wrapper } from './Header.styles';

const Header = () => {
	const isBreakpoint = useMediaQuery(767);

	return (
		<Wrapper>
			<StyledTitle>the plantes</StyledTitle>
			{isBreakpoint ? <MobileNavigation /> : <DesktopNavigation />}
		</Wrapper>
	);
};

export default Header;
