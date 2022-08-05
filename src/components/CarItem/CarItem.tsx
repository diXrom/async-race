import { FC, memo } from 'react';
import { Stack, Box, SvgIcon } from '@mui/material';
import { motion } from 'framer-motion';

import CarItemControls from './CarItemControls';

import { ReactComponent as finish } from '../../assets/finish.svg';
import { ReactComponent as f1 } from '../../assets/f1.svg';
import { finishStyle } from '../../util/styles';
import { ICarItem } from '../../types';
import useRaceAnimation from '../hooks/useRaceAnimation';

const CarItem: FC<ICarItem> = ({ id = '', name, color, race, setWinner }) => {
  const { controls, start, stop } = useRaceAnimation(id, name, race, setWinner);
  return (
    <Stack>
      <CarItemControls id={id} race={race} name={name} carStart={start} carStop={stop} />
      <Box component={motion.div} animate={controls} sx={{ width: '150px', height: '50px' }}>
        <SvgIcon component={f1} sx={{ width: '150px', height: '50px', color }} inheritViewBox />
      </Box>
      <Box sx={{ mt: 0, borderTop: '3px dashed black', position: 'relative' }}>
        <SvgIcon sx={finishStyle} component={finish} inheritViewBox />
      </Box>
    </Stack>
  );
};

export default memo(CarItem);
