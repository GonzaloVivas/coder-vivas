import { createTheme } from "@mui/material";
import { grey, red } from '@mui/material/colors';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      // default: grey[900]
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
            backgroundColor: '#652cab'
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
          color: red[500],
          '&:hover': {
            backgroundColor: 'transparent',
          },
        },
        sizeSmall: {
          backgroundColor: '#7d38d1',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#652cab',
          }
        },
        sizeLarge: {
          paddingTop: '18px',
          paddingBottom: '18px',
          minWidth: '200px',
          backgroundColor: '#7d38d1',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#652cab',
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
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          elevation: 0,
          borderRadius: '20px',
          textAlign: 'center',
          width: '300px',
          boxShadow: '0px 0px 40px 1px rgb(71, 71, 71, 0.3)',
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#ffffff'
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          color: '#000000',
        }
      }
    }
  },
});