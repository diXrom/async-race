import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000'
    },
    secondary: {
      main: '#F3E600'
    },
    info: {
      main: '#FFF'
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1000,
      lg: 1300,
      xl: 1536
    }
  }
});

export default responsiveFontSizes(theme);
