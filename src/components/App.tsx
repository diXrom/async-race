import { Box, Container } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

import Header from './Header';
import Footer from './Footer';
import ErrorBoundry from './ErrorBoundry';

import theme from '../util/theme';
import { mainStyle } from '../util/styles';

import Race from './Race';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundry>
        <Box sx={mainStyle}>
          <Header />
          <Race />
          <Footer />
        </Box>
      </ErrorBoundry>
    </ThemeProvider>
  );
};

export default App;
