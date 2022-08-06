interface ICar {
  id?: string;
  name: string;
  color: string;
}
interface ICarIcon {
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
interface IWinnersTable {
  isLoadingWins: boolean;
  wins: IWinner[] | undefined;
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
  handlerClose: () => void;
}

interface ICarItem extends ICar {
  race: string;
  setWinner: React.Dispatch<React.SetStateAction<ICarWinner[]>>;
}

interface ICarItemControls {
  id: string;
  name: string;
  race: string;
  carStart: () => void;
  carStop: () => void;
}

interface ICarItemBtns {
  race: string;
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

interface ICarsPagination {
  race: string;
  setRace: React.Dispatch<React.SetStateAction<string>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  data:
    | {
        apiResponse: ICar[];
        totalCount: number;
      }
    | undefined;
}

export type {
  IErrorProps,
  IErrorState,
  IRaceBtns,
  ICarsPagination,
  ICarItemControls,
  ICarResult,
  ICarSpeed,
  ICar,
  IWinnersTable,
  ICarIcon,
  IWinner,
  ICarUpdate,
  ICarWinner,
  ICarItem,
  IModal,
  ICarFields,
  ICarItemBtns
};
