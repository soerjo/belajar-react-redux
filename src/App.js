import React from "react";
import Counter from "./components/Counter";
import "./App.css";

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <h2>Counter Outer: {count}</h2>
      <Counter counter={count} setCounter={setCount} />
    </div>
  );
};

export default App;
