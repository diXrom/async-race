import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICar } from '../types';

export const raceApi = createApi({
  reducerPath: 'raceApi',
  tagTypes: ['cars', 'winners'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (build) => ({
    getCars: build.query<{ apiResponse: ICar[]; totalCount: number }, number>({
      query: (page) => (page ? `garage?_page=${page}&_limit=7` : 'garage'),
      transformResponse(apiResponse: ICar[], meta) {
        return { apiResponse, totalCount: Number(meta?.response?.headers.get('X-Total-Count')) };
      },
      providesTags: () => ['cars']
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
    })
  })
});

export const { useGetCarsQuery, useAddCarMutation, useDeleteCarMutation, useUpdateCarMutation } =
  raceApi;
