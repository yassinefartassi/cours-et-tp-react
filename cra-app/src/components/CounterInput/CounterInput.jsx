import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "store/counter/counter-slice";

const CounterInput = () => {
  const dispatch = useDispatch();
  function doIncrement() {
    dispatch(increment(1));
  }
  function doDecrement() {
    dispatch(decrement(1));
  }
  return (
    <div>
      <button onClick={doIncrement} type="button">
        Increase
      </button>
      <button onClick={doDecrement} type="button">
        Decrease
      </button>
    </div>
  );
};

export default CounterInput;
