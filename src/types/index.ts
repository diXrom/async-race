import {
  MutationDefinition,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta
} from '@reduxjs/toolkit/dist/query';
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';

interface ICar {
  id?: string;
  name: string;
  color: string;
}

interface ICarUpdate {
  id: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IWinner {
  id?: number;
  time: number;
  wins: number;
}

interface ICarWinner {
  id: string;
  time: number;
  name: string;
}

interface ICarSpeed {
  velocity: number;
  distance: number;
}

interface ICarResult {
  success: boolean;
}

interface IRaceBtns {
  race: string;
  setRace: React.Dispatch<React.SetStateAction<string>>;
}

interface IErrorProps {
  children: JSX.Element;
}

interface IErrorState {
  hasError: boolean;
}

interface IModal {
  children: JSX.Element[] | JSX.Element;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ICarItem extends ICar {
  race: string;
  setWinner: React.Dispatch<React.SetStateAction<ICarWinner[]>>;
}

interface ICarItemControls {
  id: string;
  name: string;
  carStart: () => void;
  carStop: () => void;
}

interface ICarFields {
  name: string;
  color: string;
  setCar: React.Dispatch<
    React.SetStateAction<{
      name: string;
      color: string;
    }>
  >;
}

interface ICarItemBtns {
  carStart: () => void;
  carStop: () => void;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
  status: boolean;
}

interface ICarsPagination {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  data:
    | {
        apiResponse: ICar[];
        totalCount: number;
      }
    | undefined;
}

type CreateWinner = MutationTrigger<
  MutationDefinition<
    IWinner,
    BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
    'cars' | 'winners',
    IWinner,
    'raceApi'
  >
>;

type UpdateWinner = MutationTrigger<
  MutationDefinition<
    IWinner,
    BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
    'cars' | 'winners',
    IWinner,
    'raceApi'
  >
>;

type WinnersData =
  | {
      apiResponse: IWinner[];
      totalCount: number;
    }
  | undefined;
type CarData =
  | {
      apiResponse: ICar[];
      totalCount: number;
    }
  | undefined;

export type {
  IErrorProps,
  IErrorState,
  IRaceBtns,
  ICarsPagination,
  ICarItemControls,
  ICarResult,
  ICarSpeed,
  ICar,
  IWinner,
  ICarUpdate,
  ICarWinner,
  ICarItem,
  IModal,
  ICarFields,
  ICarItemBtns,
  CreateWinner,
  UpdateWinner,
  WinnersData,
  CarData
};
