import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { changeSearchTerm } from "../store/slices/carsSlice";

const CarSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.cars.searchTerm);

  return (
    <div className="list-header block">
      {/* <div className="field is-horizontal is-align-items-center"> */}
      <div className="field">
        <label className="label">Search</label>
        <input className="input" value={searchTerm} onChange={(e) => dispatch(changeSearchTerm(e.target.value))} />
      </div>
    </div>
  );
};

export { CarSearch };
