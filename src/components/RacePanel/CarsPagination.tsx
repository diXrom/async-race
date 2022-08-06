import { FC, Fragment, memo, useEffect } from 'react';
import { Stack, Typography, Pagination, Divider } from '@mui/material';

import { ICarsPagination } from '../../types';
import { getCount } from '../../util/helperFunctions';

const CarsPagination: FC<ICarsPagination> = ({ data, race, setRace, page, setPage }) => {
  useEffect(() => {
    if (!data?.apiResponse.length && page > 1) {
      const currentPage = Number(localStorage.getItem('_garagePage'));
      setPage(data?.totalCount ? getCount(data?.totalCount) : currentPage);
    }
  }, [data?.apiResponse.length, data?.totalCount, page, setPage]);

  if (!data) return null;
  return (
    <Fragment>
      <Divider sx={{ mt: 2 }}>
        <Typography variant="h6" component="div">
          Cars
        </Typography>
      </Divider>
      <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6" component="div">
          Page: {page}
        </Typography>
        <Pagination
          count={getCount(data?.totalCount)}
          page={page}
          onChange={(_, value) => {
            setPage(value);
            setRace('');
          }}
          shape="rounded"
          showFirstButton
          showLastButton
          disabled={race === 'started'}
        />
        <Typography variant="h6" component="div">
          Garage: ({data?.totalCount})
        </Typography>
      </Stack>
    </Fragment>
  );
};

export default memo(CarsPagination);
