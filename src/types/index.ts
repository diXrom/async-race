export interface ICar {
  name: string;
  color: string;
  id?: string;
}
export interface ICarSpeed {
  velocity: number;
  distance: number;
}
export interface ICarResult {
  success: boolean;
}

export interface ICarItemControls {
  id: string;
  name: string;
  carStart: () => void;
  carStop: () => void;
}

export interface ICarsPagination {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  data:
    | {
        apiResponse: ICar[];
        totalCount: number;
      }
    | undefined;
}

export interface IRaceBtns {
  race: string;
  setRace: React.Dispatch<React.SetStateAction<string>>;
}
