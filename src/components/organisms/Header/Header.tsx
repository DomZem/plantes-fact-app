import { DesktopNavigation, Title, Wrapper } from './Header.styles';

const Header = () => (
	<Wrapper>
		<Title>the plantes</Title>
		<DesktopNavigation>
			<a href='https://google.pl'>Mercury</a>
			<a href='https://google.pl'>Venus</a>
			<a href='https://google.pl'>Earth</a>
			<a href='https://google.pl'>Mars</a>
			<a href='https://google.pl'>Jupiter</a>
			<a href='https://google.pl'>Saturn</a>
			<a href='https://google.pl'>Uranus</a>
			<a href='https://google.pl'>Neptune</a>
		</DesktopNavigation>
	</Wrapper>
);

export default Header;
