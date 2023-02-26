import Header from 'components/organisms/Header/Header';
import { GlobalStyle } from 'lib/styles/GlobalStyles';
import { theme } from 'lib/styles/theme';
import Planet from 'pages/Planet/Planet';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './App.styles';

const App = () => (
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Wrapper>
				<Header />
				<Routes>
					<Route path='/:planetName' element={<Planet />} />
				</Routes>
			</Wrapper>
		</ThemeProvider>
	</BrowserRouter>
);

export default App;
