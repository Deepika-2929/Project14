import {
    FETCH_USERS_PENDING,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE } 
from "../Types/actiontypes";

export const fetchUsers = async (dispatch) => {    
    dispatch({ type: 'FETCH_USERS_PENDING'});
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        dispatch({ type: 'FETCH_USERS_SUCCESS', payload: data });
    } catch (error) {
        dispatch({ type: 'FETCH_USERS_FAILURE', payload: error.message });
    }
};
