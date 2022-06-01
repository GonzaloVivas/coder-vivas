import { createTheme } from "@mui/material";
import { grey, red } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: grey[900]
    },
    primary: {
      main: '#7d38d1',
      dark: '#4a148c',
      light: '#9f7dc9',
    },
    secondary: {
      main: '#19857b'
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        primary: {
          backgroundColor: '#7d38d1',
          borderRadius: '20px',
          '&:hover': {
            backgroundColor: '#4a148c'
          },
          color: '#ffffff'
        },
        notBg: {
          backgroundColor: 'transparent',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#4a148c',
            border: 'none',
          },
        },
        danger: {
          backgroundColor: red[600],
          borderRadius: '20px',
          '&:hover': {
            backgroundColor: red[900],
          },
          color: '#ffffff'
        },
        dangerUnfilled: {
          backgroundColor: 'transparent',
          color: red[100],
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
        sizeSmall: {
          backgroundColor: '#7d38d1',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#4a148c',
          }
        },
        sizeLarge: {
          paddingTop: '18px',
          paddingBottom: '18px',
          minWidth: '200px',
          backgroundColor: '#7d38d1',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#4a148c',
          }
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        primary: {
          backgroundColor: '#7d38d1',
          color: '#ffffff',
          boxShadow: 'unset',
          '&:hover': {
            backgroundColor: '#4a148c',
          },
        },
        danger: {
          backgroundColor: red[600],
          color: '#ffffff',
          boxShadow: 'unset',
          '&:hover': {
            backgroundColor: red[900],
          },
        },
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: grey[800],
          borderRadius: '20px',
          textAlign: 'center',
          width: '300px'
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#ffffff'
        }
      }
    }
  }
});