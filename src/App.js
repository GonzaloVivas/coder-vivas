import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import NavBar from './components/layout/NavBar';
import ItemDetailContainer from './components/item/ItemDetailContainer';
import ItemListContainer from './components/item/ItemListContainer';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';
import NotFound from './components/NotFound';
import { lightTheme } from './themes/light-theme';
import { darkTheme } from './themes/dark-theme';
import './App.css';
import { CartProvider } from './context/cart/CartContext';
import Footer from './components/layout/Footer';
import { CategoriesProvider } from './context/categories/CategoriesContext';
import ScrollToTop from './components/ScrollToTop';

function App() {

  const [colorMode, setColorMode] = useState('dark');

  const toggleColorMode = () => {
    setColorMode((prevValue) => (prevValue === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeProvider theme={colorMode === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline>
        <BrowserRouter>

          <CategoriesProvider>
            <CartProvider>

              <NavBar colorMode={colorMode} toggleColorMode={toggleColorMode} />
              <Container maxWidth='xl' sx={{ minHeight: 'calc(100vh - 475px)' }}>
                <ScrollToTop>
                  <Routes>
                    <Route path='/' element={ <ItemListContainer />}/>
                    <Route path='/category/:category' element={ <ItemListContainer />}/>
                    <Route path='/item/:id' element={ <ItemDetailContainer />}/>
                    <Route path='/cart' element={ <Cart />}/>
                    <Route path='/checkout' element={ <Checkout />}/>
                    <Route path='/*' element={ <NotFound /> }/>
                  </Routes>
                </ScrollToTop>
              </Container>
              <Footer />

            </CartProvider>
          </CategoriesProvider>
          
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
