import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "../reducers/Rootreducers";
import { thunk } from "redux-thunk";


const store = createStore(rootReducer , applyMiddleware(thunk)); // Placeholder for the Redux store

export default store;