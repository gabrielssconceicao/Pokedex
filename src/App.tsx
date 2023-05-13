import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Pokedex from './Pokedex';
import { GlobalStyle } from './Styles/global';
import { theme } from './Styles/Theme';
import { PokedexRoutes } from './routes';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PokedexRoutes />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
