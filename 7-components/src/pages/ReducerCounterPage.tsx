import { useReducer, useState } from "react";
import { Button, ButtonPurpose } from "../components/Button";
import { Panel } from "../components/Panel";

type CounterPageProps = {
  initialValue: number;
};

enum CountActionType {
  Increment,
  Decrement,
  AddValue,
  ChangeValueToAdd,
}

type CountAction = {
  type: CountActionType;
  payload?: string;
};

type CountState = {
  counter: number;
  toAdd: string;
};

const reducer = (state: CountState, action: CountAction) => {
  let newCounter = state.counter;
  let newToAdd = state.toAdd;

  switch (action.type) {
    case CountActionType.Increment:
      newCounter++;
      break;
    case CountActionType.Decrement:
      newCounter--;
      break;
    case CountActionType.ChangeValueToAdd:
      console.log("payload:", action.payload);
      // console.log("payload == true:", action.payload == true);
      const numericToAdd = parseInt(action.payload ?? "0");
      newToAdd = isNaN(numericToAdd) ? "0" : numericToAdd.toString();
      break;
    case CountActionType.AddValue:
      if (!isNaN(parseInt(state.toAdd))) {
        newCounter += parseInt(state.toAdd);
      }
  }

  return {
    ...state,
    toAdd: newToAdd,
    counter: newCounter,
  };
};

const ReducerCounterPage = ({ initialValue }: CounterPageProps) => {
  const [state, dispatch] = useReducer(reducer, { counter: initialValue, toAdd: "0" });

  return (
    <>
      <Panel className="p-3">
        <div>Counter: {state.counter}</div>
        <Button purpose={ButtonPurpose.primary} onClick={() => dispatch({ type: CountActionType.Decrement })}>
          -
        </Button>{" "}
        <Button purpose={ButtonPurpose.primary} onClick={() => dispatch({ type: CountActionType.Increment })}>
          +
        </Button>
      </Panel>

      <Panel className="mt-3 p-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: CountActionType.AddValue });
            // setCounter(() => {

            // if (isNaN(parseInt(toAdd))) {
            //   return prev;
            // }

            // return prev + parseInt(toAdd);
            // })
          }}
        >
          <label>Add a lot</label>
          <input
            type="number"
            className="p-1 m-3 border"
            value={state.toAdd}
            // onChange={(e) => setToAdd(isNaN(parseInt(e.target.value)) ? "0" : parseInt(e.target.value).toString())}
            onChange={(e) => dispatch({ type: CountActionType.ChangeValueToAdd, payload: e.target.value })}
          />
          <Button purpose={ButtonPurpose.primary}>Add it!</Button>
        </form>
      </Panel>
    </>
  );
};

export { ReducerCounterPage };
