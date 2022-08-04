import { FC, useState } from 'react';
import { Button, Grid } from '@mui/material';

import CarFields from '../CarPanel/CarFields';

import { useUpdateCarMutation } from '../../services/raceApi';
import { ICarUpdate } from '../../types';

const CarUpdate: FC<ICarUpdate> = ({ id, setOpen }) => {
  const [updateCar] = useUpdateCarMutation();
  const [{ name, color }, setCar] = useState({ name: '', color: '#ECECEC' });
  const handleUpdateCar = async () => {
    await updateCar({ name, color, id }).unwrap();
    setCar({ name: '', color: '#ECECEC' });
  };
  return (
    <Grid container spacing={2} alignItems="flex-end">
      <CarFields name={name} color={color} setCar={setCar} />
      <Grid item xs={6}>
        <Button
          disabled={!name.length}
          size="small"
          onClick={() => {
            handleUpdateCar();
            setOpen(false);
          }}
          variant="contained"
          sx={{ color: '#F3E600', width: 135 }}
        >
          Update Car
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button
          onClick={() => setOpen(false)}
          size="small"
          variant="contained"
          sx={{ color: '#F3E600', width: 135 }}
        >
          Close
        </Button>
      </Grid>
    </Grid>
  );
};

export default CarUpdate;
