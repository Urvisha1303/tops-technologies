import React, { createContext, useContext, useState } from 'react'

const login = createContext();
export const useLogin = ()=>{
    return useContext(login)
}

const LoginContext = ({children}) => {

    const [loginContext, setLoginContext] = useState(false)
  return (
    <div>
        <login.Provider value={{loginContext,setLoginContext}}>
{children}
        </login.Provider>
    </div>
  )
}

export default LoginContext