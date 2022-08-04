interface ICar {
  name: string;
  color: string;
  id?: string;
}
interface ICarSpeed {
  velocity: number;
  distance: number;
}
interface ICarResult {
  success: boolean;
}
interface ICarItemControls {
  id: string;
  name: string;
  carStart: () => void;
  carStop: () => void;
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
interface ICarWinner {
  id: string;
  time: number;
}
interface ICarItem extends ICar {
  race: string;
  setWinner: React.Dispatch<React.SetStateAction<ICarWinner[]>>;
}
interface IModalCarUpdate {
  id: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
interface ICarUpdate {
  id: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
  ICarUpdate,
  ICarWinner,
  ICarItem,
  IModalCarUpdate,
  ICarFields,
  ICarItemBtns
};
