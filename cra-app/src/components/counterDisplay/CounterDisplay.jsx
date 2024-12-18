import React from "react";
import { useSelector } from "react-redux";

const CounterDisplay = () => {
  const counter = useSelector((store) => store.COUNT.counter);
  return <div>{counter}</div>;
};

export default CounterDisplay;
