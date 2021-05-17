import React from "react";

function Counter(props) {
  const { counter, setCounter } = props;

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  const handleIncrementBy = (value) => {
    setCounter(counter + value);
  };
  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div
      style={{
        backgroundColor: "gray",
        margin: "auto",
        padding: "10px",
      }}
    >
      <h2>Count: {counter}</h2>
      <button onClick={() => handleDecrement()}>Kurang</button>
      <button onClick={() => handleIncrement()}>Tambah</button>
      <button onClick={() => handleIncrementBy(5)}>Tambah 5</button>
      <button onClick={() => handleReset()}>Reset Value 0</button>
    </div>
  );
}

export default Counter;
