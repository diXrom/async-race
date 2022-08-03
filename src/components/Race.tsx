import { Container, Divider, Typography } from '@mui/material';
import RacePanel from './RacePanel/RacePanel';
import CarPanel from './CarPanel/CarPanel';

const Race = () => {
  return (
    <Container maxWidth="xl">
      <CarPanel />
      <RacePanel />
    </Container>
  );
};

export default Race;
