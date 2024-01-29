import "./styles.css";
import { useReducer } from "react";
import React from "react";
const initilState = {
  countAdd: 0,
  countSubtract: 0,
  countMulti: 1,
};
const updateInitialState = (state, action) => {
  switch (action.type) {
    case "countAdd":
      return { ...state, countAdd: state.countAdd + 1 };
    case "countSubtract":
      return { ...state, countSubtract: state.countSubtract - 1 };
    case "countMulti":
      return { ...state, countMulti: state.countMulti * 5 };
    case "reset":
      return { ...state, countAdd: 0, countSubtract: 0, countMulti: 1 };
    default:
      return state;
      break;
  }
};

export default function App() {
  const [count, dispatch] = useReducer(updateInitialState, initilState);
  return (
    <div className="App">
      <h1>{count.countAdd}</h1>
      <h1>{count.countSubtract}</h1>
      <h1>{count.countMulti}</h1>
      <button onClick={() => dispatch({ type: "countAdd" })}>Add</button>
      <button onClick={() => dispatch({ type: "countSubtract" })}>
        Subtract
      </button>
      <button onClick={() => dispatch({ type: "countMulti" })}>Multiply</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

