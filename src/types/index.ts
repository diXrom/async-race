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
  status: string;
  carStart: (mood: string) => void;
  carStop: (mood: string) => void;
}
