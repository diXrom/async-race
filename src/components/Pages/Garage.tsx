import { Container } from '@mui/material';

import RacePanel from '../RacePanel/RacePanel';
import CarPanel from '../CarPanel/CarPanel';

const Garage = () => {
  return (
    <Container maxWidth="xl">
      <CarPanel />
      <RacePanel />
    </Container>
  );
};

export default Garage;
