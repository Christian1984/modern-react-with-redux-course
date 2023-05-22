import { useSelector } from "react-redux";
import { RootState } from "../store";

const CarValue = () => {
  const value = useSelector((state: RootState) =>
    state.cars.data
      .filter((car) => car.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase()))
      .reduce((acc, car) => acc + car.cost, 0)
  );
  return <h4 className="subtitle is-4">Total Value: ${value}</h4>;
};

export { CarValue };
