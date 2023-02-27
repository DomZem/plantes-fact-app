import MobileNavigation from 'components/molecules/MobileNavigation/MobileNavigation';
import { Title, Wrapper } from './Header.styles';

const Header = () => {
	return (
		<Wrapper>
			<Title>the plantes</Title>
			<MobileNavigation />
		</Wrapper>
	);
};

export default Header;
