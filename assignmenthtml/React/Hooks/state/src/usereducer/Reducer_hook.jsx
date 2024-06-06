import React, { useReducer, useState } from "react";

const initialstate = { count: 0 };
const reducer = (state, action) => {
  return { count: state.count + 1 };
};

const Reducer_hook = () => {
  // const [number, setNumber] = useState(0)

  const [state, dispatch] = useReducer(reducer, initialstate);

  const increment = () => {
    // setNumber(number + 1)
    dispatch();
  };

  const decrement = () => {
    dispatch();
  };
  return (
    <div>
      <h1>Count: {state.count} </h1>
      <button
        onClick={() => {
          increment();
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          decrement();
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default Reducer_hook;
