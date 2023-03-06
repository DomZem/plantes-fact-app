import Header from 'components/organisms/Header/Header';
import { GlobalStyle } from 'lib/styles/GlobalStyles';
import { theme } from 'lib/styles/theme';
import { planets } from 'mocks/fixtures';
import Planet from 'pages/Planet/Planet';
import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Main } from './App.styles';

const App = () => (
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header />
			<Main>
				<Routes>
					<Route path='/' element={<Navigate to={`/${planets[0].name.toLowerCase()}`} />} />
					<Route path='/:planetName' element={<Planet />} />
				</Routes>
			</Main>
		</ThemeProvider>
	</BrowserRouter>
);

export default App;
