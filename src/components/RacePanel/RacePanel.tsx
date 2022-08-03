import { useState, useEffect } from 'react';
import { Stack } from '@mui/material';

import CarsPagination from './CarsPagination';
import CarItem from './CarItem';
import RaceBtns from './RaceBtns';

import { useGetCarsQuery } from '../../services/raceApi';
import { ICarWinner } from '../../types';

const RacePanel = () => {
  const [page, setPage] = useState(1);
  const [race, setRace] = useState('');
  const { data } = useGetCarsQuery(page);
  const [winner, setWinner] = useState<ICarWinner[]>([]);
  useEffect(() => {
    if (winner.length === data?.apiResponse.length) {
      setRace('');
      setWinner([]);
    }
  }, [data?.apiResponse.length, winner.length]);

  return (
    <Stack spacing={2}>
      <RaceBtns race={race} setRace={setRace} />
      <CarsPagination page={page} setPage={setPage} data={data} />
      {data?.apiResponse.map((item) => (
        <CarItem key={item.id} setWinner={setWinner} race={race} {...item} />
      ))}
    </Stack>
  );
};

export default RacePanel;
