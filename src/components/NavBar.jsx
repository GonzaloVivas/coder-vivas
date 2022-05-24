import React, { useContext, useState } from 'react'

import { AppBar, Box, Button, Container, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import CartWidget from './CartWidget';
import logo from '../logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../context/cart/CartContext';

const categories = [
  {
    slug: 'comida',
    label: 'Comida'
  },
  {
    slug: 'bebida',
    label: 'Bebida'
  },
  {
    slug: 'accesorios',
    label: 'Accesorios'
  },
];

export const NavBar = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const { totalInCart } = useContext(CartContext)

  return (
    <AppBar position='sticky' elevation={0} background='#0d47a1'>
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
              categories.map( ({ slug, label }) => (
                <NavLink
                  to={ `category/${slug}` }
                  key={ label }
                  className='nav-link'
                >
                  { label }
                </NavLink>
              ))
            }
          </Box>

          <Box sx={{ justifyContent: 'flex-end', alignContent: 'center', gap: 4, display: { xs: 'none', md: 'flex' } }}>
            <Link to='/cart'>
              <CartWidget cartCount={ totalInCart() } />
            </Link>
            <Button
              variant='primary'
              sx={{ display: 'flex' }}
              startIcon={<AccountCircleIcon />}
            >
              Login
            </Button>
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
              <MenuIcon />
            </IconButton>

            <Drawer
              open={ isDrawerOpen }
              onClose={ () => setIsDrawerOpen(false) }
            >
              <List>
                {
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
                }
              </List>
              <Divider />
              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Button
                  variant='primary'
                  sx={{ display: 'flex' }}
                  startIcon={<AccountCircleIcon />}
                >
                  Login
                </Button>
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
