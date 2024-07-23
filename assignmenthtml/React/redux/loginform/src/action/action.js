export const login = (name, password)=>{
    return{
        type:"LOGIN",
        payload: {name, password}
    }
}

export const register = (name, email, password)=>{
    return{
        type:"REGISTER",
        payload : {name, email, password}
    }
}