const increment = () => ({
  type: "increment",
});

const decrement = () => ({
  type: "decrement",
});

const incrementBy = (value) => ({
  type: "incrementBy",
  value,
});

const reset = () => ({
  type: "reset",
});

const initialState = {
  count: 0,
  past: 0,
};

export default function reducer(state = initialState, action) {
  //   console.log("output action:", action);
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "incrementBy":
      return { ...state, count: state.count + action.value };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
}

export { increment, decrement, incrementBy, reset };
