import { Button } from '@mui/material';

import { carBrand, carModal } from '../../data';
import { useAddCarMutation } from '../../services/raceApi';
import { getRandomName, getRandomColor } from '../../util/helperFunctions';

const CarsGenerate = () => {
  const [addCar] = useAddCarMutation();
  const handleAddCars = async () => {
    const lengthBrand = carBrand.length - 1;
    const lengthModal = carModal.length - 1;
    const carsPromise = Array.from({ length: 100 }, () =>
      addCar({
        name: getRandomName(lengthBrand, lengthModal),
        color: getRandomColor()
      })
    );
    await Promise.all(carsPromise);
  };

  return (
    <Button size="small" onClick={handleAddCars} variant="contained" sx={{ color: '#F3E600' }}>
      Generate Cars
    </Button>
  );
};

export default CarsGenerate;
