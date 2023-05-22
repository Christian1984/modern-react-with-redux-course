import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { deleteCar } from "../store/slices/carsSlice";

const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state: RootState) => state.cars.data);

  return (
    <div className="cars-list panel m-3 p-3">
      <h4 className="subtitle is-4">Cars</h4>
      {cars.map((car) => (
        <div key={car.id} className="block is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center">
          <span>
            {car.name}, ${car.cost}
            {/* {car.name}, {car.cost}, {car.id} */}
          </span>
          <button className="button is-danger" onClick={() => dispatch(deleteCar(car.id || ""))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export { CarList };
