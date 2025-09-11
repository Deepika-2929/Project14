import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'; 
import { fetchUsers } from '../../Redux/Actions/useractions'; 

const Users = () => {
const { Users, loading, error} = useSelector((state) => state.Users);

const dispatch = useDispatch();

 useEffect(() => {
    fetchUsers(dispatch);
 },[dispatch]);

  return (
    <div>
        <h2>Users List</h2>         
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
    
        <ul>
            {Users && Users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}                     
        </ul>
    </div>
  );
};

export default Users;             