import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { NavBar } from './components/NavBar';
import { darkTheme } from './themes/dark-theme';

import './App.css';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <NavBar />
        <Container maxWidth='xl'>
          <ItemListContainer />
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
