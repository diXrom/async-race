import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICar, IWinner } from '../types';

import { getransformResponse } from '../util/helperFunctions';

export const raceApi = createApi({
  reducerPath: 'raceApi',
  tagTypes: ['cars', 'winners'],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://async-race-server-json.herokuapp.com/' }),
  endpoints: (build) => ({
    getCars: build.query<{ apiResponse: ICar[]; totalCount: number }, number>({
      query: (page) => (page ? `garage?_page=${page}&_limit=7` : 'garage'),
      transformResponse: getransformResponse,
      providesTags: () => ['cars']
    }),
    getWinners: build.query<IWinner[], number>({
      query: (page) => (page ? `winners?_page=${page}&_limit=10` : 'winners'),
      providesTags: () => ['winners']
    }),
    addCar: build.mutation<ICar, ICar>({
      query: (body) => ({ url: 'garage', method: 'POST', body }),
      invalidatesTags: ['cars']
    }),
    updateCar: build.mutation<ICar, ICar>({
      query: (body) => ({ url: `garage/${body.id}`, method: 'PUT', body }),
      invalidatesTags: ['cars']
    }),
    deleteCar: build.mutation<ICar, string>({
      query: (id) => ({ url: `garage/${id}`, method: 'DELETE' }),
      invalidatesTags: ['cars']
    }),
    createWinner: build.mutation<IWinner, IWinner>({
      query: (body) => ({ url: 'winners', method: 'POST', body }),
      invalidatesTags: ['winners']
    }),
    updateWinner: build.mutation<IWinner, IWinner>({
      query: (body) => ({ url: `winners/${body.id}`, method: 'PUT', body }),
      invalidatesTags: ['winners']
    }),
    deleteWinner: build.mutation<IWinner, string>({
      query: (id) => ({ url: `winners/${id}`, method: 'DELETE' }),
      invalidatesTags: ['winners']
    })
  })
});

export const {
  useGetCarsQuery,
  useGetWinnersQuery,
  useAddCarMutation,
  useDeleteCarMutation,
  useUpdateCarMutation,
  useCreateWinnerMutation,
  useUpdateWinnerMutation,
  useDeleteWinnerMutation
} = raceApi;
