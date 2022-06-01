import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { NavBar } from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';
import { darkTheme } from './themes/dark-theme';
import './App.css';
import { CartProvider } from './context/cart/CartContext';
import Footer from './components/Footer';

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <BrowserRouter>
          
          <CartProvider>

            <NavBar />
            <Container maxWidth='xl' sx={{ minHeight: 'calc(100vh - 475px)' }}>
                <Routes>
                  <Route path='/' element={ <ItemListContainer />}/>
                  <Route path='/category/:category' element={ <ItemListContainer />}/>
                  <Route path='/item/:id' element={ <ItemDetailContainer />}/>
                  <Route path='/cart' element={ <Cart />}/>
                  <Route path='/checkout' element={ <Checkout />}/>
                  <Route path='/*' element={ <NotFound /> }/>
                </Routes>
            </Container>
            <Footer />

          </CartProvider>
          
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
