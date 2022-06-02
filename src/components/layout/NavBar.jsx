import { useContext, useState } from 'react'

import { AppBar, Box, Container, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Skeleton, Toolbar, Typography } from '@mui/material';
import { DarkMode, LightMode, Menu } from '@mui/icons-material';

import CartWidget from '../cart/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../../context/cart/CartContext';
import { CategoriesContext } from '../../context/categories/CategoriesContext';

import logo from '../../logo.svg';

export default function NavBar({ colorMode, toggleColorMode }) {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const { categories } = useContext(CategoriesContext);
  const { totalInCart } = useContext(CartContext)

  return (
    <AppBar position='sticky' elevation={0}>
      <Container maxWidth='xl'>
        <Toolbar>
          
          {/* Desktop  */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link to='/' style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: '#ffffff',
            }}>
              <IconButton sx={{ p: 0, display: { xs: 'none', md: 'flex' } }}>
                <img width={60} height={60} src={logo} alt="MorfiStore" />
              </IconButton>
              <Typography
                variant="h4"
                noWrap
                href="/"
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  textDecoration: 'none',
                  color: '#ffffff'
                }}
              >
                MorfiStore
              </Typography>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, justifyContent: 'center', alignContent: 'center', gap: 4, display: { xs: 'none', md: 'flex' } }}>
            {
              categories.length ?
                categories.map( ({ slug, label }) => (
                  <NavLink
                    to={ `category/${slug}` }
                    key={ label }
                    className='nav-link'
                  >
                    { label }
                  </NavLink>
                ))
                :
                <>
                  <Skeleton height='30px' width='100px' />
                  <Skeleton height='30px' width='100px' />
                  <Skeleton height='30px' width='100px' />
                </>
            }
          </Box>

          <Box sx={{ justifyContent: 'flex-end', alignContent: 'center', gap: 4, display: { xs: 'none', md: 'flex' } }}>
            <Link to='/cart'>
              <CartWidget cartCount={ totalInCart() } />
            </Link>
            <IconButton onClick={toggleColorMode} color="inherit">
              {colorMode === 'dark' ? <LightMode /> : <DarkMode />}
            </IconButton>
          </Box>
          {/* END DESKTOP */}

          {/* MOBILE */}
          <Box sx={{ width: '100%', display: { xs: 'flex', md: 'none' }, justifyContent: 'space-between' }}>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              sx={{ display: { xs: 'flex', md: 'none' } }}
              onClick={ () => setIsDrawerOpen(!isDrawerOpen) }
            >
              <Menu />
            </IconButton>

            <Drawer
              open={ isDrawerOpen }
              onClose={ () => setIsDrawerOpen(false) }
            >
              <List>
                {
                  categories.length ?
                    categories.map(({ slug, label }) => (
                      <Link
                        to={`category/${slug}`}
                        key={label}
                        className='nav-link'
                        onClick={ () => setIsDrawerOpen(false) }
                      >
                        <ListItem>
                          <ListItemButton sx={{ paddingX: '50px' }}>
                            <ListItemText sx={{ textAlign: 'center' }} primary={ label } />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    ))
                    :
                    <>
                      <ListItem>
                        <ListItemButton sx={{ paddingX: '50px' }}>
                          <Skeleton width='115px' height='40px' />
                        </ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton sx={{ paddingX: '50px' }}>
                          <Skeleton width='115px' height='40px' />
                        </ListItemButton>
                      </ListItem>
                      <ListItem>
                        <ListItemButton sx={{ paddingX: '50px' }}>
                          <Skeleton width='115px' height='40px' />
                        </ListItemButton>
                      </ListItem>
                    </>
                }
              </List>
              <Divider />
              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <IconButton onClick={toggleColorMode} color="inherit">
                  {colorMode === 'dark' ? <LightMode /> : <DarkMode />}
                </IconButton>
              </Box>
            </Drawer>
            
            <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Link to='/' style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: '#ffffff',
              }}>
                <IconButton sx={{ p: 0 }}>
                  <img width={60} height={60} src={logo} alt="MorfiStore" />
                </IconButton>

                <Typography
                  variant="h6"
                  noWrap
                  href="/"
                  sx={{
                    color: '#ffffff',
                    textDecoration: 'none',
                  }}
                >
                  MorfiStore
                </Typography>         
              </Link>
            </Box>

            <Box sx={{ justifyContent: 'flex-end', alignContent: 'center', gap: 4, display: 'flex' }}>
              <Link to='/cart' style={{ display: 'flex' }}>
                <CartWidget cartCount={ totalInCart() } />
              </Link>
            </Box>

          </Box>

          {/* END MOBILE */}

        </Toolbar>
      </Container>
    </AppBar>
  )
}
