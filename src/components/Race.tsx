import { Container, Divider, Typography } from '@mui/material';
import CarList from './CarList';
import SettingsPanel from './SettingsPanel/SettingsPanel';

const Race = () => {
  return (
    <Container maxWidth="xl">
      <SettingsPanel />
      <Divider sx={{ mt: 2 }}>
        <Typography variant="h5" component="div">
          Race
        </Typography>
      </Divider>
      <CarList />
    </Container>
  );
};

export default Race;
