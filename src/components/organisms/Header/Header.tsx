import DesktopNavigation from 'components/molecules/DesktopNavigation/DesktopNavigation';
import MobileNavigation from 'components/molecules/MobileNavigation/MobileNavigation';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { Title, Wrapper } from './Header.styles';

const Header = () => {
	const isBreakpoint = useMediaQuery(767);

	return (
		<Wrapper>
			<Title>the plantes</Title>
			{isBreakpoint ? <MobileNavigation /> : <DesktopNavigation />}
		</Wrapper>
	);
};

export default Header;
