import { FC, Fragment } from 'react';
import { Grid, TextField } from '@mui/material';

import { colorPicker } from '../../util/styles';
import { ICarFields } from '../../types';

const CarFields: FC<ICarFields> = ({ name, color, setCar }) => {
  return (
    <Fragment>
      <Grid item xs={9}>
        <TextField
          color="secondary"
          label="Rename"
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
    </Fragment>
  );
};

export default CarFields;
