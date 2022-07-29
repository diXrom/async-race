import { memo } from 'react';
import { Toolbar, Typography, Link } from '@mui/material';

const Footer = () => (
  <Toolbar sx={{ bgcolor: '#000', paddingY: 1 }}>
    <Link
      href="https://rs.school/"
      target="_blank"
      rel="noopener"
      underline="none"
      sx={{ flexGrow: 1 }}
    >
      <img src="./assets/logo_RSS.svg" loading="lazy" alt="" />
    </Link>
    <Typography variant="h6" component="div" sx={{ mr: 2, color: '#FFF' }}>
      2022
    </Typography>
    <Link href="https://github.com/diXrom" target="_blank" rel="noopener" underline="none">
      <Typography variant="h6" component="div" sx={{ color: '#F3E600' }}>
        GitHub
      </Typography>
    </Link>
  </Toolbar>
);

export default memo(Footer);
