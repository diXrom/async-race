import { Divider, Stack, Typography, Button } from '@mui/material';

import CarsPagination from './CarsPagination';
import CarItem from '../CarItem/CarItem';
import RaceBtns from './RaceBtns';
import ModalInfo from '../ModalInfo';

import { getModalWinner } from '../../util/helperFunctions';
import useLocalStorage from '../hooks/useLocalStorage';

import useWinners from '../hooks/useWinners';

const RacePanel = () => {
  const [page, setPage] = useLocalStorage(1, '_garagePage');
  const { open, race, winners, data, setOpen, setRace, setWinners } = useWinners(page);
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
