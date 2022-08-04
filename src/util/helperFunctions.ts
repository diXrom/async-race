import { AnimationControls } from 'framer-motion';
import { carBrand, carModal } from '../data';
import {
  ICarSpeed,
  ICarResult,
  ICarWinner,
  IWinner,
  UpdateWinner,
  CreateWinner,
  ICar,
  WinnersData,
  CarData
} from '../types';

const CONTAINER_WIDTH = 1536;
const CAR_WIDTH = 210;
const CONVERT_M_TO_KM = 1000;
const CARS_PER_PAGE = 7;

const getWidth = (width: number) => (width > CONTAINER_WIDTH ? CONTAINER_WIDTH : width) - CAR_WIDTH;

const getTime = ({ distance, velocity }: ICarSpeed) => distance / (velocity * CONVERT_M_TO_KM);

const getCount = (num = 1) => Math.ceil(num / CARS_PER_PAGE);

const getRandomColor = () => `#${String(Math.random().toString(16)).slice(2, 8)}`;

const getRandomNumber = (length: number) => {
  const randomNumber = Math.round(Math.random() * 100);
  return randomNumber > length ? length : randomNumber;
};

const getRandomName = (lengthBrand: number, lengthModal: number) => {
  return `${carBrand[getRandomNumber(lengthBrand)]} ${carModal[getRandomNumber(lengthModal)]}`;
};

const getWinner = (winners: ICarWinner[]): IWinner | null => {
  const winner = winners.filter((item) => item.time).sort((a, b) => a.time - b.time)[0];
  if (!winner) return null;
  return { id: Number(winner.id), time: Number(winner.time.toFixed(2)), wins: 1 };
};

const getModalWinner = (winners: ICarWinner[]) => {
  const winner = winners.filter((item) => item.time).sort((a, b) => a.time - b.time)[0];
  if (!winner) return `Not a single car came to the finish line`;
  return `The ${winner.name} covered the distance in ${winner.time.toFixed(2)} seconds`;
};

const getRaceData = async (id: string, status: string) => {
  const response = await fetch(`http://localhost:3001/engine?id=${id}&status=${status}`, {
    method: 'PATCH'
  });
  if (!response.ok) throw new Error('Car with such id was not found in the garage');
  const data: ICarSpeed = await response.json();
  return data;
};

const getResult = async (id: string) => {
  const response = await fetch(`http://localhost:3001/engine?id=${id}&status=drive`, {
    method: 'PATCH'
  });
  if (!response.ok) return false;
  const data: ICarResult = await response.json();
  return data.success;
};

const carStart = async (
  controls: AnimationControls,
  id: string,
  name: string,
  width: number,
  setWinner: React.Dispatch<React.SetStateAction<ICarWinner[]>>
) => {
  const carRaceData = await getRaceData(id, 'started');
  const time = getTime(carRaceData);
  controls.start({ x: getWidth(width), transition: { duration: time } });
  const result = await getResult(id);
  if (result) setWinner((state) => [...state, { id, name, time }]);
  if (!result) {
    setWinner((state) => [...state, { id, name, time: 0 }]);
    controls.stop();
  }
};

const carStop = async (controls: AnimationControls, id: string) => {
  await getRaceData(id, 'stopped');
  controls.stop();
  controls.start({ x: 0, transition: { duration: 2 } });
};

const setWinner = (
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  createWinner: CreateWinner,
  updateWinner: UpdateWinner,
  winners: ICarWinner[],
  winnersData: WinnersData,
  data: CarData
) => {
  if (winners.length === data?.apiResponse.length) {
    setOpen(true);
    const winner = getWinner(winners);
    if (!winner) return;
    const findWinner = winnersData?.apiResponse.find((item) => item.id === winner.id);
    if (findWinner) {
      updateWinner({
        id: findWinner.id,
        wins: findWinner.wins + 1,
        time: Math.min(findWinner.time, winner.time)
      });
    }
    if (!findWinner) createWinner(winner);
  }
};

export {
  getRandomName,
  getRandomColor,
  getWidth,
  getCount,
  carStart,
  carStop,
  getWinner,
  getModalWinner,
  setWinner
};
