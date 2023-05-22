import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { changeCost, changeName } from "../store/slices/formSlice";
import { addCar } from "../store/slices/carsSlice";
import { useRef } from "react";

const CarForm = () => {
  const dispatch = useDispatch();

  const name = useSelector((state: RootState) => state.form.name);
  const cost = useSelector((state: RootState) => state.form.cost);

  const nameRef = useRef<HTMLInputElement>(null);

  return (
    <div className="car-form panel p-3 m-3">
      <h4 className="subtitle is-4">Add Car</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              ref={nameRef}
              value={name}
              onChange={(e) => dispatch(changeName(e.target.value))}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ""}
              type="number"
              onChange={(e) => dispatch(changeCost(isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value)))}
            />
          </div>
          <div className="field">
            <div className="control">
              <button
                className="button is-link"
                onClick={(e) => {
                  e.preventDefault();

                  dispatch(addCar({ name: name, cost: cost }));

                  dispatch(changeName(""));
                  dispatch(changeCost(0));
                  nameRef.current?.focus();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export { CarForm };
