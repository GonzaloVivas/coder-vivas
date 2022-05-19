import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { NavBar } from './components/NavBar';
import { darkTheme } from './themes/dark-theme';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import './App.css';

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <BrowserRouter>
          <NavBar />
          <Container maxWidth='xl'>
              <Routes>
                <Route path='/' element={ <ItemListContainer />}/>
                <Route path='/category/:category' element={ <ItemListContainer />}/>
                <Route path='/item/:id' element={ <ItemDetailContainer />}/>
                <Route path='/*' element={ <NotFound /> }/>
              </Routes>
          </Container>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
