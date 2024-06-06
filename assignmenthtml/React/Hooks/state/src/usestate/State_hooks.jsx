import React , {useState}from "react";

const State_hooks = () => {
  const [count, setCount] = useState(0);
  const [name, setName ] = useState('')

  const Increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
        <input type="text" onChange={(e)=>{
setName(e.target.value)
        }} />
      <h1> {name} has Clicked {count} times!!</h1>
      <button
        onClick={() => {
          Increment();
        }}
      >
        {" "}
        Increase{" "}
      </button>
    </div>
  );
};

export default State_hooks;
