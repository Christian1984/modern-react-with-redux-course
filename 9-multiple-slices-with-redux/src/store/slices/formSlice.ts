import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

type FormState = {
  name: string;
  cost: number;
};

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  } as FormState,
  reducers: {
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    changeCost: (state, action: PayloadAction<number>) => {
      state.cost = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCar, () => ({ name: "", cost: 0 }));
  },
});

export const { changeName, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
export type { FormState };
