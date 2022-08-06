import { FC, Fragment, useState } from 'react';
import { Flag, DoDisturb } from '@mui/icons-material';
import { Button } from '@mui/material';

import { ICarItemBtns } from '../../types';

const CarItemBtns: FC<ICarItemBtns> = ({ carStart, carStop, race }) => {
  const [status, setStatus] = useState(false);
  return (
    <Fragment>
      <Button
        onClick={() => {
          carStart();
          setStatus(true);
        }}
        size="small"
        endIcon={<Flag color="secondary" />}
        disabled={status || race === 'started' || race === 'pending'}
      >
        Start
      </Button>
      <Button
        onClick={() => {
          carStop();
          setStatus(false);
        }}
        size="small"
        endIcon={<DoDisturb color="secondary" />}
        disabled={!status}
        sx={{ ml: 1 }}
      >
        Stop
      </Button>
    </Fragment>
  );
};

export default CarItemBtns;
