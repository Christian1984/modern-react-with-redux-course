import { useState } from "react";

const useCounter = (initialValue: number) => {
  const [counter, setCounter] = useState(initialValue);
  const handleDecrement = () => setCounter((prev) => prev - 1);
  const handleIncrement = () => setCounter((prev) => prev + 1);

  return { counter, handleDecrement, handleIncrement };
};

export { useCounter };
