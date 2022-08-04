import { AnimationControls } from 'framer-motion';
import { carBrand, carModal } from '../data';
import { ICarSpeed, ICarResult, ICarWinner } from '../types';

const CONTAINER_WIDTH = 1536;
const CAR_WIDTH = 210;
const CONVERT_M_TO_KM = 1000;
const CARS_PER_PAGE = 7;

const getRandomNumber = (length: number) => {
  const randomNumber = Math.round(Math.random() * 100);
  return randomNumber > length ? length : randomNumber;
};
const getRandomName = (lengthBrand: number, lengthModal: number) => {
  return `${carBrand[getRandomNumber(lengthBrand)]} ${carModal[getRandomNumber(lengthModal)]}`;
};
const getRandomColor = () => `#${String(Math.random().toString(16)).slice(2, 8)}`;
const getWidth = (width: number) => (width > CONTAINER_WIDTH ? CONTAINER_WIDTH : width) - CAR_WIDTH;
const getTime = ({ distance, velocity }: ICarSpeed) => ({
  duration: distance / (velocity * CONVERT_M_TO_KM)
});
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
  width: number,
  setWinner: React.Dispatch<React.SetStateAction<ICarWinner[]>>
) => {
  const carRaceData = await getRaceData(id, 'started');
  controls.start({ x: getWidth(width), transition: getTime(carRaceData) });
  const result = await getResult(id);
  if (result) setWinner((state) => [...state, { id, time: carRaceData.velocity }]);
  if (!result) {
    setWinner((state) => [...state, { id, time: 0 }]);
    controls.stop();
  }
};
const carStop = async (controls: AnimationControls, id: string) => {
  await getRaceData(id, 'stopped');
  controls.stop();
  controls.start({ x: 0, transition: { duration: 2 } });
};
const getCount = (num = 1) => Math.ceil(num / CARS_PER_PAGE);
export {
  getRandomName,
  getRandomColor,
  getRaceData,
  getResult,
  getWidth,
  getTime,
  getCount,
  carStart,
  carStop
};
