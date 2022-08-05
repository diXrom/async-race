import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

import ErrorBoundry from './ErrorBoundry';
import Garage from './Pages/Garage';
import Winners from './Pages/Winners';
import Layout from './Layout';

import { mainStyle, theme } from '../util/styles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundry>
        <Box sx={mainStyle}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Garage />} />
              <Route path="winners" element={<Winners />} />
            </Route>
          </Routes>
        </Box>
      </ErrorBoundry>
    </ThemeProvider>
  );
};

export default App;
