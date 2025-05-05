import '@/main.css';

import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router';

import { queryClient } from '@/lib/react-query';
import { Router } from '@/router';
import { ThemeProvider } from '@/styles/theme-provider';
export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="pokedex-theme">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
