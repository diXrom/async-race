import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';

import { Flag } from '@mui/icons-material';

const Header = () => (
  <AppBar position="static">
    <Toolbar sx={{ paddingY: 1 }}>
      <Flag fontSize="large" />
      <Typography variant="h6" component="h3" sx={{ flexGrow: 1 }}>
        Async Race
      </Typography>
      <NavLink to="/">
        <Typography variant="h6" component="div" color="inherit" sx={{ mr: 2 }}>
          Garage
        </Typography>
      </NavLink>
      <NavLink to="/winners">
        <Typography variant="h6" component="div" color="inherit">
          Winners
        </Typography>
      </NavLink>
    </Toolbar>
  </AppBar>
);

export default memo(Header);
