import { memo } from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';
import { Flag } from '@mui/icons-material';

const Header = () => (
  <AppBar position="static">
    <Toolbar sx={{ paddingY: 1 }}>
      <Flag fontSize="large" />
      <Typography variant="h6" component="h3" sx={{ flexGrow: 1 }}>
        Async Race
      </Typography>
      <Link href="https://github.com/diXrom" target="_blank" rel="noopener" underline="none">
        <Typography variant="h6" component="div" sx={{ mr: 2, color: '#F3E600' }}>
          Garage
        </Typography>
      </Link>
      <Link href="https://github.com/diXrom" target="_blank" rel="noopener" underline="none">
        <Typography variant="h6" component="div" sx={{ color: '#F3E600' }}>
          Winners
        </Typography>
      </Link>
    </Toolbar>
  </AppBar>
);

export default memo(Header);
