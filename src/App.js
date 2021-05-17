import React from "react";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";
import "./App.css";

const App = () => {
  const { count, past } = useSelector((state) => state.counter);

  return (
    <div className="App">
      <h2>Counter Outer: {count}</h2>
      <Counter count={count} />
    </div>
  );
};

export default App;
