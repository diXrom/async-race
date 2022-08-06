import { FC } from 'react';
import { SvgIcon } from '@mui/material';

import { ReactComponent as f1 } from '../../assets/f1.svg';
import { ICarIcon } from '../../types';

const CarIcon: FC<ICarIcon> = ({ color }) => {
  return <SvgIcon component={f1} sx={{ width: '150px', height: '50px', color }} inheritViewBox />;
};

export default CarIcon;
