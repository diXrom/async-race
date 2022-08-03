import { Box } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

import ErrorBoundry from './ErrorBoundry';
import Header from './Header';
import Footer from './Footer';
import Race from './Race';

import { mainStyle, theme } from '../util/styles';

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
