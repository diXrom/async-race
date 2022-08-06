import { FC, Fragment, memo } from 'react';
import { Divider, Typography, Stack, Button } from '@mui/material';

import { IRaceBtns } from '../../types';

const RaceBtns: FC<IRaceBtns> = ({ setRace, race }) => {
  return (
    <Fragment>
      <Divider sx={{ mt: 2 }}>
        <Typography variant="h6" component="div">
          Race settings
        </Typography>
      </Divider>
      <Stack spacing={2} direction="row" sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onClick={() => setRace('started')}
          size="small"
          variant="contained"
          sx={{ color: '#F3E600' }}
          disabled={race === 'started' || race === 'pending'}
        >
          Race
        </Button>
        <Button
          onClick={() => setRace('stopped')}
          size="small"
          variant="contained"
          sx={{ color: '#F3E600' }}
          disabled={race === 'started'}
        >
          Recet
        </Button>
      </Stack>
    </Fragment>
  );
};

export default memo(RaceBtns);
