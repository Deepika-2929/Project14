import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";

// Reducer Function
const initialState = {count : 0} ;

const counterReducer = ( state = initialState , action ) => {
switch ( action . type ) {
case "INCREMENT" :
return { ... state , count : state . count + 1 } ;

case "DECREMENT" :
return { ... state , count : state . count - 1 } ;
default :
return state ;
}
};

//created a store
export const store = createStore(counterReducer, applyMiddleware(thunk)); //in redux tool kit we use configure store.



