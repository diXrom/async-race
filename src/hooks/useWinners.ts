import { useState, useEffect } from 'react';

import {
  useGetCarsQuery,
  useGetWinnersQuery,
  useCreateWinnerMutation,
  useUpdateWinnerMutation
} from '../services/raceApi';
import { getWinner } from '../util/helperFunctions';
import { ICarWinner, IWinner } from '../types';

const fakeWinner = { id: '0', name: '0', time: 0 };
const createWinner = (winner: IWinner, timeWinner: number) => ({
  id: winner.id,
  wins: winner.wins + 1,
  time: Math.min(winner.time, timeWinner)
});
const useWinners = (page: number, setPage: React.Dispatch<React.SetStateAction<number>>) => {
  const [race, setRace] = useState('');
  const [open, setOpen] = useState(false);
  const [winners, setWinners] = useState<ICarWinner[]>([]);
  const { data } = useGetCarsQuery(page);
  const { data: winnersData } = useGetWinnersQuery(0);
  const [addWinner] = useCreateWinnerMutation();
  const [updateWinner] = useUpdateWinnerMutation();
  useEffect(() => {
    if (data?.apiResponse.length && winners.length !== data?.apiResponse.length) return;
    const winner = getWinner(winners);
    if (!winner) return;
    const findWinner = winnersData?.find((item) => item.id === winner.id);
    if (findWinner) updateWinner(createWinner(findWinner, winner.time));
    if (!findWinner) addWinner(winner);
    winners.push(fakeWinner);
    setOpen(true);
  }, [addWinner, data, page, setPage, updateWinner, winners, winnersData]);
  return { race, open, winners, data, setRace, setOpen, setWinners };
};
export default useWinners;
