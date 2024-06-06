import React, { useMemo, useState } from "react";

const Memo_hook = () => {
  const[number, setNumber] = useState(0);

  const squareNumber = useMemo(()=>{
    return number * number;
  },[number])
  return (
    <>
    <div>
      <label>Number: </label>
      <input type="number" value={number} onChange={(e)=>[
        setNumber(e.target.value)
      ]}/>
    </div>
    
    <h2>{squareNumber}</h2>
    </>
  );
};

export default Memo_hook;
