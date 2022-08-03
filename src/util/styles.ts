import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = responsiveFontSizes(
  createTheme({
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
  })
);

const mainStyle = {
  display: 'grid',
  gridTemplateRows: '70px 1fr 70px',
  minHeight: '100vh',
  gap: '30px'
};
const colorPicker = {
  backgroundColor: 'inherit',
  width: '40px',
  border: '2px solid #CCC',
  borderRadius: '5px'
};
const finishStyle = {
  position: 'absolute',
  right: 110,
  top: '-55px',
  width: '50px',
  height: '50px'
};
const error = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'white',
  color: 'black',
  border: '3px solid #F3E600',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4
};

export { mainStyle, colorPicker, finishStyle, error, theme };
