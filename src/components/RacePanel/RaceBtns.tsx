import { FC, Fragment, memo, useEffect, useState } from 'react';
import { Divider, Typography, Stack, Button } from '@mui/material';

import { IRaceBtns } from '../../types';
import sound from '../../assets/car_sound.mp3';

const RaceBtns: FC<IRaceBtns> = ({ setRace, race }) => {
  const [audio] = useState(new Audio(sound));
  useEffect(() => () => audio.pause(), [audio]);
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
            audio.play();
          }}
          size="small"
          variant="contained"
          sx={{ color: '#F3E600' }}
          disabled={race === 'started' || race === 'pending'}
        >
          Race
        </Button>
        <Button
          onClick={() => {
            setRace('stopped');
            audio.pause();
            audio.currentTime = 0;
          }}
          size="small"
          variant="contained"
          sx={{ color: '#F3E600' }}
          disabled={!race || race === 'started' || race === 'stopped'}
        >
          Recet
        </Button>
      </Stack>
    </Fragment>
  );
};

export default memo(RaceBtns);
