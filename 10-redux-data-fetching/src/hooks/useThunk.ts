import { AsyncThunk } from "@reduxjs/toolkit";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

const useThunk = <T>(thunk: AsyncThunk<T, void, any>): [() => void, boolean, boolean] => {
  const dispatch = useDispatch<AppDispatch>();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runThunk = useCallback(() => {
    setIsLoading(true);
    setIsError(false);
    dispatch(thunk())
      .unwrap()
      .catch((err) => {
        console.log(err);
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  }, [dispatch, thunk]);

  return [runThunk, isLoading, isError];
};

export default useThunk;
export { useThunk };
