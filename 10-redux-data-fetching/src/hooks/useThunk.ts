import { AsyncThunk } from "@reduxjs/toolkit";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

const useThunk = <T, V>(thunk: AsyncThunk<T, V, any>): [(param: V) => void, boolean, boolean] => {
  const dispatch = useDispatch<AppDispatch>();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const runThunk = useCallback((param: V) => {
    setIsLoading(true);
    setIsError(false);
    dispatch(thunk(param))
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
