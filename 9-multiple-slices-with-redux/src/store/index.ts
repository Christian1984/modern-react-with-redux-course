import { configureStore } from "@reduxjs/toolkit";
import { formReducer, FormState } from "./slices/formSlice";
import { carsReducer, Car, CarsState } from "./slices/carsSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type { Car, CarsState, FormState };
