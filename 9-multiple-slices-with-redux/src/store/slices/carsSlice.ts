import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CarsState = {
  searchTerm: string;
  cars: Car[];
};

type Car = {
  id: number;
  name: string;
  cost: number;
};

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  } as CarsState,
  reducers: {
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    addCar: (state, action: PayloadAction<Car>) => {
      state.cars.push(action.payload);
    },
    deleteCar: (state, action: PayloadAction<number>) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
  },
});

export const { changeSearchTerm, addCar, deleteCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
export type { Car, CarsState };
