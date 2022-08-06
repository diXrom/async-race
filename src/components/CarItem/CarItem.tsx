import { FC, memo } from 'react';
import { Stack, Box, SvgIcon } from '@mui/material';
import { motion } from 'framer-motion';

import CarItemControls from './CarItemControls';

import { ReactComponent as finish } from '../../assets/finish.svg';
import { finishStyle } from '../../util/styles';
import { ICarItem } from '../../types';
import useRaceAnimation from '../../hooks/useRaceAnimation';
import CarIcon from './CarIcon';

const CarItem: FC<ICarItem> = ({ id = '', name, color, race, setWinner }) => {
  const { controls, start, stop } = useRaceAnimation(id, name, race, setWinner);
  return (
    <Stack>
      <CarItemControls id={id} race={race} name={name} carStart={start} carStop={stop} />
      <Box component={motion.div} animate={controls} sx={{ width: '150px', height: '50px' }}>
        <CarIcon color={color} />
      </Box>
      <Box sx={{ mt: 0, borderTop: '3px dashed black', position: 'relative' }}>
        <SvgIcon sx={finishStyle} component={finish} inheritViewBox />
      </Box>
    </Stack>
  );
};

export default memo(CarItem);
