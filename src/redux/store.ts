import { configureStore } from '@reduxjs/toolkit';
import { raceApi } from '../services/raceApi';

export const store = configureStore({
  reducer: {
    [raceApi.reducerPath]: raceApi.reducer
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(raceApi.middleware)
});
