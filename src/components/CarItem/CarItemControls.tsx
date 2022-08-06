import { FC, memo, useState } from 'react';
import { Stack, IconButton, Typography, Divider } from '@mui/material';
import { Delete, Settings } from '@mui/icons-material';

import CarItemBtns from './CarItemBtns';
import CarUpdate from '../CarPanel/CarUpdate';
import ModalInfo from '../ModalInfo';

import { useDeleteCarMutation, useDeleteWinnerMutation } from '../../services/raceApi';
import { ICarItemControls } from '../../types';

const CarItemControls: FC<ICarItemControls> = ({ id, race, name, carStart, carStop }) => {
  const [open, setOpen] = useState(false);
  const [deleteCar] = useDeleteCarMutation();
  const [deleteWinners] = useDeleteWinnerMutation();
  const handlerClose = () => setOpen(false);
  return (
    <Stack direction="row" sx={{ alignItems: 'center' }}>
      <IconButton
        disabled={race === 'started' || race === 'pending'}
        onClick={() => {
          deleteCar(id);
          deleteWinners(id);
        }}
      >
        <Delete color="secondary" />
      </IconButton>
      <IconButton onClick={() => setOpen(true)} disabled={race === 'started' || race === 'pending'}>
        <Settings color="secondary" />
      </IconButton>
      <CarItemBtns race={race} carStart={carStart} carStop={carStop} />
      <Typography variant="body1" component="div" sx={{ ml: 1 }}>
        {name}
      </Typography>
      <ModalInfo open={open} handlerClose={handlerClose}>
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
