import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import theme from './styles/theme';
import Router from './Router';

function App() {
  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
