import React, { useEffect, useRef, useState } from 'react';

const Reference_hook = () => {
  const [name, setName] = useState('');
  const count = useRef(0);

  useEffect(() => {
    count.current += 1;
  });

  return (
    <div>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
        value={name}
      />
      <h3>Name: {name}</h3>
      <h3>Renders: {count.current}</h3>
    </div>
  );
};

export default Reference_hook;
