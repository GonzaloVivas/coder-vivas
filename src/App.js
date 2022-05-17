import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { NavBar } from './components/NavBar';
import { darkTheme } from './themes/dark-theme';
import ItemDetailContainer from './components/ItemDetailContainer';
// import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <NavBar />
        <Container maxWidth='xl'>
          {/* <ItemListContainer /> */}
          <ItemDetailContainer />
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
