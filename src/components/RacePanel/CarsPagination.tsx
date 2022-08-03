import { FC, Fragment, memo } from 'react';
import { Stack, Typography, Pagination, Divider } from '@mui/material';

import { ICarsPagination } from '../../types';
import { getCount } from '../../util/helperFunctions';

const CarsPagination: FC<ICarsPagination> = ({ data, page, setPage }) => {
  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
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
          onChange={handleChange}
          shape="rounded"
          showFirstButton
          showLastButton
        />
        <Typography variant="h6" component="div">
          Garage: ({data?.totalCount})
        </Typography>
      </Stack>
    </Fragment>
  );
};

export default memo(CarsPagination);
