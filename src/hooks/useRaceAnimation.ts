import { useCallback, useLayoutEffect } from 'react';
import { useAnimationControls } from 'framer-motion';

import { carStart, carStop } from '../util/helperFunctions';
import { ICarWinner } from '../types';

const useRaceAnimation = (
  id: string,
  name: string,
  race: string,
  setWinner: React.Dispatch<React.SetStateAction<ICarWinner[]>>
) => {
  const { innerWidth: width } = window;
  const controls = useAnimationControls();
  const start = useCallback(
    () => carStart(controls, id, name, width, setWinner, race),
    [controls, setWinner, id, name, width, race]
  );
  const stop = useCallback(() => carStop(controls, id), [controls, id]);
  useLayoutEffect(() => {
    if (race === 'started') start();
    if (race === 'stopped') stop();
  }, [start, stop, race]);
  return { controls, start, stop };
};
export default useRaceAnimation;
