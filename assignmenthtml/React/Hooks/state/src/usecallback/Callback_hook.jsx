import React, { useCallback, useState } from "react";

const Callback_hook = () => {
  const [number, setNumber] = useState(0);

  const handleInputChange = useCallback((e) => {
    setNumber(Number(e.target.value));
  },[]);
  return (
    <div>
      <h4>Number: {number}</h4>
      <input
        type="number"
       
        onChange={
          handleInputChange}
      />
    </div>
  );
};

export default Callback_hook;
