import React from 'react';
import { theme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';
import Router from './routes';




//BUSCAR O AUTH PROVIDER
function App() {
  return (
    <ThemeProvider theme={theme}>
     <GlobalStyle /> 
     <Router/> 
   </ThemeProvider>
  );
}

export default App;
