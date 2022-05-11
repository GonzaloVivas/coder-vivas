import { CssBaseline, ThemeProvider } from '@mui/material';
import { NavBar } from './components/NavBar';
import { darkTheme } from './themes/dark-theme';

import './App.css';

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <NavBar />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
