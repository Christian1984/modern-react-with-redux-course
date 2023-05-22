import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

type CarsState = {
  searchTerm: string;
  data: Car[];
};

type Car = {
  id?: string;
  name: string;
  cost: number;
};

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    data: [],
  } as CarsState,
  reducers: {
    changeSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    addCar: (state, action: PayloadAction<Car>) => {
      state.data.push({
        ...action.payload,
        id: nanoid(),
      });
    },
    deleteCar: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((car) => car.id !== action.payload);
    },
  },
});

export const { changeSearchTerm, addCar, deleteCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
export type { Car, CarsState };
