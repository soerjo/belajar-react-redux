import React from "react";
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementBy,
  reset,
} from "../redux/feature/counter";

function Counter(props) {
  const { count } = props;
  const dispatch = useDispatch();
  console.log(count);

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementBy = (value) => {
    dispatch(incrementBy(value));
  };
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div
      style={{
        backgroundColor: "gray",
        margin: "auto",
        padding: "10px",
      }}
    >
      <h2>Count: {count}</h2>
      <button onClick={() => handleDecrement()}>Kurang</button>
      <button onClick={() => handleIncrement()}>Tambah</button>
      <button onClick={() => handleIncrementBy(5)}>Tambah 5</button>
      <button onClick={() => handleReset()}>Reset Value 0</button>
    </div>
  );
}

export default Counter;
