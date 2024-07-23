import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user:JSON.parse(localStorage.getItem('user')) || [],
    currentUser : null,
    message:""
}


const reducerlogin = createSlice({
    name:"user",
    initialState,
    reducers:{
        registerUser:(state, action)=>{
           const existingUser =  state.user.find(user=> user.email === action.payload.email);
           if(existingUser){
            state.message = "user Already Registered"
           }else{
            state.user.push(action.payload);
            localStorage.setItem('user', JSON.stringify(state.user));
            state.message = "Registration Successful"
           }
        },
        loginUser:(state,action)=>{
            const user = state.user.find((user)=>user.name === action.payload.name && user.password === action.payload.password);
            if(user){
                state.currentUser = user;
                state.message = "Login Successful";
            }else{
                state.message = "Login Failed";
            }
        },
        logoutUser:(state)=>{
            state.currentUser = null;
            state.message = "Logout Successful"
        }

    }
});
export const {registerUser, loginUser, logoutUser} = reducerlogin.actions;
export default reducerlogin.reducer;




