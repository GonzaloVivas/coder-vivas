import React, { useState } from 'react'

import { AppBar, Box, Button, Container, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import CartWidget from './CartWidget';
import logo from '../logo.svg';

export const NavBar = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <AppBar position='sticky' elevation={0} background='#0d47a1'>
      <Container maxWidth='xl'>
        <Toolbar>
          
          {/* Desktop  */}
          <IconButton sx={{ p: 0, display: { xs: 'none', md: 'flex' } }}>
            <img width={60} height={60} src={logo} alt="MorfiStore" />
          </IconButton>

          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
              color: '#ffffff'
            }}
          >
            MorfiStore
          </Typography>

          <Box sx={{ flexGrow: 1, justifyContent: 'center', alignContent: 'center', gap: 4, display: { xs: 'none', md: 'flex' } }}>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Comida
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Bebida
            </Button>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Accesorios
            </Button>
          </Box>

          <Box sx={{ justifyContent: 'flex-end', alignContent: 'center', gap: 4, display: { xs: 'none', md: 'flex' } }}>
            <CartWidget cartCount={4} />
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
                  <ListItem>
                  <ListItemButton sx={{ paddingX: '50px' }}>
                      <ListItemText sx={{ textAlign: 'center' }} primary='COMIDA' />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      <ListItemText sx={{ textAlign: 'center' }} primary='BEBIDA' />
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      <ListItemText sx={{ textAlign: 'center' }} primary='ACCESORIOS' />
                    </ListItemButton>
                  </ListItem>
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
              <IconButton sx={{ p: 0 }}>
                <img width={60} height={60} src={logo} alt="MorfiStore" />
              </IconButton>

              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  color: '#ffffff',
                  textDecoration: 'none',
                }}
              >
                MorfiStore
              </Typography>         
            </Box>

            <Box sx={{ justifyContent: 'flex-end', alignContent: 'center', gap: 4, display: 'flex' }}>
              <CartWidget cartCount={4} />
            </Box>

          </Box>

          {/* END MOBILE */}

        </Toolbar>
      </Container>
    </AppBar>
  )
}
