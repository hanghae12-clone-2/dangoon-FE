import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
