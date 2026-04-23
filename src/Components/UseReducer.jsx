import React, { useReducer } from "react";

const UseReducer = () => {
  const initailValue = 0;
  const constReducer = (state, action) => {
    switch (action.type) {
      case "increase_count":
        return state + 1;
      case "decrease_count":
        return state > 0 ? state - 1 : state;
    }
  };
  const [count, dispatch] = useReducer(countReducer, initailValue);
  console.log(count);

  return (
    <div>
      <button onClick={() => dispatch({ type: "increase_count" })}>Add</button>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: "increase_count" })}>
        Reduce
      </button>
    </div>
  );
};

export default UseReducer;
