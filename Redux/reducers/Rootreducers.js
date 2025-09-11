import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import counterReducer from "./reducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    Users: usersReducer,
    // Add your individual reducers here
}); 
export default rootReducer;
