import Header from 'components/organisms/Header/Header';
import { GlobalStyle } from 'lib/styles/GlobalStyles';
import { theme } from 'lib/styles/theme';
import styled, { ThemeProvider } from 'styled-components';

const App = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Wrapper>
			<Header />
		</Wrapper>
	</ThemeProvider>
);

export const Wrapper = styled.div`
	width: 100%;
	min-height: 100vh;

	background-color: ${({ theme }) => theme.colors.darkBlue};
	background-image: url('images/background-stars.svg');
`;

export default App;
