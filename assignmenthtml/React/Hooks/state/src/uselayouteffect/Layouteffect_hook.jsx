import React, { useLayoutEffect, useRef, useState } from "react";

const Layouteffect_hook = () => {
  const [toggle, setToggle] = useState(false);
 const divref = useRef();

  useLayoutEffect(() => {
    if(toggle && divref.current){
        const divwidth = divref.current;
    console.log("Element width:", divwidth.offsetWidth);
}
  }, [toggle]);


  return (
    <div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h4 ref={divref}>Code Bless You</h4>}
    </div>
  );
};

export default Layouteffect_hook;
