import { FC, memo, useState } from 'react';
import { Stack, IconButton, Typography } from '@mui/material';
import { Delete, Settings } from '@mui/icons-material';

import CarItemBtns from './CarItemBtns';
import ModalCarUpdate from '../RacePanel/ModalCarUpdate';

import { useDeleteCarMutation } from '../../services/raceApi';
import { ICarItemControls } from '../../types';

const CarItemControls: FC<ICarItemControls> = ({ id, name, carStart, carStop }) => {
  const [status, setStatus] = useState(false);
  const [open, setOpen] = useState(false);
  const [deleteCar] = useDeleteCarMutation();
  return (
    <Stack direction="row" sx={{ alignItems: 'center' }}>
      <IconButton onClick={() => deleteCar(id)}>
        <Delete color="secondary" />
      </IconButton>
      <IconButton onClick={() => setOpen(true)}>
        <Settings color="secondary" />
      </IconButton>
      <CarItemBtns carStart={carStart} carStop={carStop} status={status} setStatus={setStatus} />
      <Typography variant="body1" component="div" sx={{ ml: 1 }}>
        {name}
      </Typography>
      <ModalCarUpdate id={id} open={open} setOpen={setOpen} />
    </Stack>
  );
};

export default memo(CarItemControls);
