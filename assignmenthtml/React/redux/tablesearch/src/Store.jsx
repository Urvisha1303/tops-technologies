import state from "./reducer";
import { createStore } from "redux";

const store = createStore(state);
export default store;