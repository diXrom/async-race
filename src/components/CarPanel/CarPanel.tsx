import { Fragment } from 'react';
import { Grid, Stack, Divider, Typography } from '@mui/material';

import CarsGenerate from './CarsGenerate';
import CarAdd from './CarAdd';

const CarPanel = () => {
  return (
    <Fragment>
      <Divider>
        <Typography variant="h6" component="div">
          Car settings
        </Typography>
      </Divider>
      <Stack sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Grid container spacing={2} alignItems="flex-end" sx={{ width: '350px' }}>
          <CarAdd />
          <Grid item xs={6}>
            <CarsGenerate />
          </Grid>
        </Grid>
      </Stack>
    </Fragment>
  );
};

export default CarPanel;
