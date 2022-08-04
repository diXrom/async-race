import { FC, memo, useState } from 'react';
import { Stack, IconButton, Typography, Divider } from '@mui/material';
import { Delete, Settings } from '@mui/icons-material';

import CarItemBtns from './CarItemBtns';
import CarUpdate from '../CarPanel/CarUpdate';
import ModalInfo from '../ModalInfo';

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
      <ModalInfo open={open} setOpen={setOpen}>
        <Divider>
          <Typography variant="h6" component="div">
            Update settings
          </Typography>
        </Divider>
        <CarUpdate id={id} setOpen={setOpen} />
      </ModalInfo>
    </Stack>
  );
};

export default memo(CarItemControls);
