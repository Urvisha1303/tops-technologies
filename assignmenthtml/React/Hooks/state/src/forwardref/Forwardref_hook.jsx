import React, { useRef } from 'react'
import Child from './Child'

const Forwardref_hook = () => {
  const input = useRef(null);
  const focusInput = () => {

    if (input.current && input.current.focus) {
      console.log(input.current.value);
      
    }
  }
  return (
    <div>
        <Child ref={input}/>
        <br />
        <button onClick={focusInput}>Focus Input</button>
    </div>
  )
}

export default Forwardref_hook;