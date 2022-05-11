import React from 'react'

import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import logo from '../logo.svg';

export const NavBar = () => {
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
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
            <IconButton sx={{ p: 0 }}>
              <img width={60} height={60} src={logo} alt="MorfiStore" />
            </IconButton>

            <Typography
              variant="h5"
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
          {/* END MOBILE */}

        </Toolbar>
      </Container>
    </AppBar>
  )
}
