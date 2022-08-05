import { useState, useEffect } from 'react';
import { Divider, Stack, Typography, Button } from '@mui/material';

import CarsPagination from './CarsPagination';
import CarItem from '../CarItem/CarItem';
import RaceBtns from './RaceBtns';
import ModalInfo from '../ModalInfo';

import { ICarWinner } from '../../types';
import { getModalWinner, setWinner } from '../../util/helperFunctions';
import {
  useCreateWinnerMutation,
  useGetCarsQuery,
  useGetWinnersQuery,
  useUpdateWinnerMutation
} from '../../services/raceApi';

const RacePanel = () => {
  const [page, setPage] = useState(1);
  const [race, setRace] = useState('');
  const [open, setOpen] = useState(false);
  const [winners, setWinners] = useState<ICarWinner[]>([]);
  const { data } = useGetCarsQuery(page);
  const { data: winnersData } = useGetWinnersQuery(0);
  const [createWinner] = useCreateWinnerMutation();
  const [updateWinner] = useUpdateWinnerMutation();
  useEffect(() => {
    setWinner(setOpen, createWinner, updateWinner, winners, winnersData, data);
  }, [createWinner, data, updateWinner, winners, winnersData]);
  const handlerClose = () => {
    setRace('');
    setWinners([]);
    setOpen(false);
  };
  return (
    <Stack spacing={2}>
      <RaceBtns race={race} setRace={setRace} />
      <CarsPagination page={page} setPage={setPage} data={data} />
      {data?.apiResponse.map((item) => (
        <CarItem key={item.id} setWinner={setWinners} race={race} {...item} />
      ))}
      <ModalInfo open={open} handlerClose={handlerClose}>
        <Divider>
          <Typography variant="h6" component="div">
            Winner
          </Typography>
        </Divider>
        <Typography variant="body1" component="div" sx={{ textAlign: 'center' }}>
          {winners.length && getModalWinner(winners)}
        </Typography>
        <Button onClick={handlerClose} sx={{ ml: 'auto', mt: 1 }}>
          Close
        </Button>
      </ModalInfo>
    </Stack>
  );
};

export default RacePanel;
