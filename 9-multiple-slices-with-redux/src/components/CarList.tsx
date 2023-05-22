import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { deleteCar } from "../store/slices/carsSlice";

const CarList = () => {
  const dispatch = useDispatch();

  const { cars, newCarName } = useSelector((state: RootState) => ({
    cars: state.cars.data.filter((car) => car.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase())),
    newCarName: state.form.name,
  }));

  return (
    <>
      {cars.map((car) => (
        <div key={car.id} className="block is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center">
          <span
            style={newCarName.trim() && car.name.toLowerCase().includes(newCarName.toLowerCase()) ? { fontWeight: "bold" } : {}}
          >
            {car.name}, ${car.cost}
          </span>
          <button className="button is-danger" onClick={() => dispatch(deleteCar(car.id || ""))}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export { CarList };
