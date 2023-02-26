import { GlobalStyle } from 'lib/styles/GlobalStyles';
import { theme } from 'lib/styles/theme';
import { ThemeProvider } from 'styled-components';

const App = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		Halo
	</ThemeProvider>
);

export default App;
