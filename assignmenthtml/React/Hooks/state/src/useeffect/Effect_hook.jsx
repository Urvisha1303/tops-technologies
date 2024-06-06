import React, { useEffect, useState } from "react";

const Effect_hook = () => {
  const [count, setCount] = useState(0);
  const [othercount, setOtherCount] = useState(5);

  const [time, setTime]= useState(0)
  const Increment = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    document.title = `${othercount} new Meassage!`;
  }, [othercount]);

  useEffect(()=>{
    const  timer = setInterval(()=>{
        setTime(time + 1)
    }, 1000)
    return ()=>{
        clearInterval(timer)
    }
  })

  return (
    <div>
      <h1> {count}</h1>
      <button
        onClick={() => {
          Increment();
        }}
      >
        Increase{" "}
      </button>
      <h3>Other Count : {othercount}</h3>
      <button onClick={()=>{
        setOtherCount(othercount + 5)
      }}>Increase</button>
      <h3>{time}</h3>
    </div>
  );
};

export default Effect_hook;
