import { Fragment } from 'react';
import { Grid, Button } from '@mui/material';

import CarFields from './CarFields';

import { useAddCarMutation } from '../../services/raceApi';
import useLocalStorage from '../../hooks/useLocalStorage';

const CarAdd = () => {
  const [addCar] = useAddCarMutation();
  const [{ name, color }, setCar] = useLocalStorage({ name: '', color: '#ECECEC' }, '_carData');
  const handleAddCar = async () => {
    await addCar({ name, color }).unwrap();
    setCar({ name: '', color: '#ECECEC' });
  };
  return (
    <Fragment>
      <CarFields name={name} color={color} setCar={setCar} />
      <Grid item xs={6}>
        <Button
          disabled={!name.length}
          size="small"
          onClick={handleAddCar}
          variant="contained"
          sx={{ color: '#F3E600', width: '151px' }}
        >
          Add Car
        </Button>
      </Grid>
    </Fragment>
  );
};

export default CarAdd;
