import CounterDisplay from "components/counterDisplay/CounterDisplay";
import CounterInput from "components/CounterInput/CounterInput";
import React from "react";

const App = () => {
  return (
    <center>
      <h1>Redux</h1>
      <CounterDisplay />
      <CounterInput />
    </center>
  );
};

export default App;
