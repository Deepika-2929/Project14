import React from 'react'
import { UserContext } from './context';

const Grandchild = () => {
    const { name , setName } = React.useContext(UserContext);
  return (
    <>
    <div> 
        {name} {setName} 
        </div>
    <button onClick ={() => setName("Pawan")}> ChangeName </button>
    </>
  );
};

export default Grandchild;