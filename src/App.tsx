import './main.css';

import { BrowserRouter } from 'react-router';

import { Router } from './router';
import { ThemeProvider } from './styles/theme-provider';
export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="pokedex-theme">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
