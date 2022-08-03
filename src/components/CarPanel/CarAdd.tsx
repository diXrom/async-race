import { Fragment, useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';

import { useAddCarMutation } from '../../services/raceApi';
import { colorPicker } from '../../util/styles';

const CarAdd = () => {
  const [addCar] = useAddCarMutation();
  const [{ name, color }, setCar] = useState({ name: '', color: '#ECECEC' });
  const handleAddCar = async () => {
    await addCar({ name, color }).unwrap();
    setCar({ name: '', color: '#ECECEC' });
  };
  return (
    <Fragment>
      <Grid item xs={9}>
        <TextField
          label="Name"
          variant="standard"
          value={name}
          onChange={(e) => setCar((state) => ({ ...state, name: e.target.value }))}
        />
      </Grid>
      <Grid item xs={3}>
        <input
          type="color"
          style={colorPicker}
          value={color}
          onChange={(e) => setCar((state) => ({ ...state, color: e.target.value }))}
        />
      </Grid>
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
