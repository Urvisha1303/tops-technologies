import { configureStore } from "@reduxjs/toolkit";
import reducerlogin from "./reducer/reducerlogin";

 const store = configureStore({
    reducer:{
        auth: reducerlogin,
    }
 });

 export default store;
