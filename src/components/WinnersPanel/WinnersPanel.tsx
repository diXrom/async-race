import { Fragment, memo } from 'react';
import { Typography, Divider } from '@mui/material';

import WinnersTable from './WinnersTable';
import { useGetWinnersQuery } from '../../services/raceApi';

const WinnersPanel = () => {
  const { data: wins, isLoading: isLoadingWins } = useGetWinnersQuery(0);
  return (
    <Fragment>
      <Divider sx={{ mb: 2 }}>
        <Typography variant="h6" component="div">
          Winners({wins?.length})
        </Typography>
      </Divider>
      <WinnersTable wins={wins} isLoadingWins={isLoadingWins} />
    </Fragment>
  );
};

export default memo(WinnersPanel);
