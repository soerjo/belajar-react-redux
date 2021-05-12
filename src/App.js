import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  incrementByAmount,
  resetValue,
} from "./redux/counterSlice";

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(decrement())}>Kurang</button>
      <button onClick={() => dispatch(increment())}>Tambah</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Tambah 5</button>
      <button onClick={() => dispatch(resetValue())}>Reset Value 0</button>
    </div>
  );
}

export default App;
