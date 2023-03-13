import Header from 'components/organisms/Header/Header';
import { planets } from 'lib/constants';
import { GlobalStyle } from 'lib/styles/GlobalStyles';
import { theme } from 'lib/styles/theme';
import Planet from 'pages/Planet/Planet';
import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { StyledMain } from './App.styles';

const App = () => (
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header />
			<StyledMain>
				<Routes>
					<Route path='/' element={<Navigate to={`/${planets[0]}`} />} />
					<Route path='/:planetName' element={<Planet />} />
				</Routes>
			</StyledMain>
		</ThemeProvider>
	</BrowserRouter>
);

export default App;
