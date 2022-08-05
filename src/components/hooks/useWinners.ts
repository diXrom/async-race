import { useState, useEffect } from 'react';

import {
  useGetCarsQuery,
  useGetWinnersQuery,
  useCreateWinnerMutation,
  useUpdateWinnerMutation
} from '../../services/raceApi';
import { getWinner } from '../../util/helperFunctions';
import { ICarWinner } from '../../types';

const fakeWinner = { id: '0', name: '0', time: 0 };

const useWinners = (page: number) => {
  const [race, setRace] = useState('');
  const [open, setOpen] = useState(false);
  const [winners, setWinners] = useState<ICarWinner[]>([]);
  const { data } = useGetCarsQuery(page);
  const { data: winnersData } = useGetWinnersQuery(0);
  const [createWinner] = useCreateWinnerMutation();
  const [updateWinner] = useUpdateWinnerMutation();
  useEffect(() => {
    if (winners.length !== data?.apiResponse.length) return;
    setOpen(true);
    const winner = getWinner(winners);
    if (!winner) return;
    const findWinner = winnersData?.apiResponse.find((item) => item.id === winner.id);
    if (findWinner) {
      updateWinner({
        id: findWinner.id,
        wins: findWinner.wins + 1,
        time: Math.min(findWinner.time, winner.time)
      });
    }
    if (!findWinner) createWinner(winner);
    winners.push(fakeWinner);
  }, [createWinner, data, updateWinner, winners, winnersData]);
  return { race, open, winners, data, setRace, setOpen, setWinners };
};
export default useWinners;
