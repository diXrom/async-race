import { FC } from 'react';
import { DataGrid } from '@mui/x-data-grid';

import useLocalStorage from '../../hooks/useLocalStorage';
import { useGetCarsQuery } from '../../services/raceApi';
import { gridCarHeaders } from '../../data';
import { IWinnersTable } from '../../types';

const WinnersTable: FC<IWinnersTable> = ({ isLoadingWins, wins }) => {
  const [page, setPage] = useLocalStorage(0, '_winnersPage');
  const { data: cars, isLoading: isLoadingCars } = useGetCarsQuery(0);
  const transformData =
    wins?.map((win) => ({ ...win, ...cars?.apiResponse.find((car) => car.id === win.id) })) || [];
  return (
    <DataGrid
      rows={transformData}
      columns={gridCarHeaders}
      page={page}
      onPageChange={(newPage) => setPage(newPage)}
      pageSize={10}
      loading={isLoadingWins || isLoadingCars}
      rowsPerPageOptions={[10]}
      pagination
      disableColumnMenu
      isRowSelectable={() => false}
      sx={{ height: 640, maxWidth: 800, m: 'auto' }}
    />
  );
};
export default WinnersTable;
