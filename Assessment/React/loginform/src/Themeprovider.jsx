import React, { createContext, useContext, useState } from "react";

const themeContext = createContext();
export const useTheme = () => {
  return useContext(themeContext);
};

const Themeprovider = ({children}) => {
  const [theme, setTheme] = useState("light");
  return (
    <div>
      <themeContext.Provider value={{ theme, setTheme }}>
        {children}
      </themeContext.Provider>
    </div>
  );
};

export default Themeprovider;
