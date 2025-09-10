import counterReducer from "../reducers/reducers";
import { createstore } from "redux";

const store = createstore(counterReducer); // Placeholder for the Redux store

export default store;