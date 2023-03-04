import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/globalStyle';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
