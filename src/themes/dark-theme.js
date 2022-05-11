import { createTheme } from "@mui/material";
import { grey } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: grey[900]
    },
    primary: {
      main: '#7d38d1'
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
        },
      },
    },
  }
});