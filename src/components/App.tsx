import { Box, Container } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

import Header from './Header';
import Footer from './Footer';
import ErrorBoundry from './ErrorBoundry';

import theme from '../util/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundry>
        <Box sx={{ display: 'grid', gridTemplateRows: '70px 1fr 70px', minHeight: '100vh' }}>
          <Header />
          <Container maxWidth="xl">
            <div className="App">Hello</div>
          </Container>
          <Footer />
        </Box>
      </ErrorBoundry>
    </ThemeProvider>
  );
}

export default App;
