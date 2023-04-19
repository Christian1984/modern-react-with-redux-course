import { useState } from "react";
import { Button, ButtonPurpose } from "../components/Button";
import { useCounter } from "../hooks/useCounter";

type CounterPageProps = {
  initialValue: number;
};

const CounterPage = ({ initialValue }: CounterPageProps) => {
  const { counter, handleDecrement, handleIncrement } = useCounter(initialValue);

  return (
    <>
      <div>Counter: {counter}</div>
      <Button purpose={ButtonPurpose.secondary} onClick={handleDecrement}>
        -
      </Button>{" "}
      <Button purpose={ButtonPurpose.primary} onClick={handleIncrement}>
        +
      </Button>
    </>
  );
};

export { CounterPage };
