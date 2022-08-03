import { FC, Fragment, useState, memo } from 'react';
import { Divider, Typography, Stack, Button } from '@mui/material';

import { IRaceBtns } from '../../types';

const RaceBtns: FC<IRaceBtns> = ({ setRace, race }) => {
  const [disabled, setDisabled] = useState(false);
  return (
    <Fragment>
      <Divider sx={{ mt: 2 }}>
        <Typography variant="h6" component="div">
          Race settings
        </Typography>
      </Divider>
      <Stack spacing={2} direction="row" sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onClick={() => {
            setRace('started');
            setDisabled(true);
          }}
          size="small"
          variant="contained"
          sx={{ color: '#F3E600' }}
          disabled={disabled}
        >
          Race
        </Button>
        <Button
          onClick={() => {
            setRace('stopped');
            setDisabled(false);
          }}
          size="small"
          variant="contained"
          sx={{ color: '#F3E600' }}
          disabled={!!race || !disabled}
        >
          Recet
        </Button>
      </Stack>
    </Fragment>
  );
};

export default memo(RaceBtns);
