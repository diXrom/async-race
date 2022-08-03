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

export type {
  IErrorProps,
  IErrorState,
  IRaceBtns,
  ICarsPagination,
  ICarItemControls,
  ICarResult,
  ICarSpeed,
  ICar
};
