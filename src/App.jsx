// import React , { useState } from 'react';
// // import Child from './child';
// // import { UserContext } from './context';
// // // import AboutPage, { Calculateage } from './Pages/AboutPage';
// // // import Contact from './Pages/Contact';
// // // import Dashboard from './Pages/Dashboard';

// // // const App = () => {
// //   // const h1Element = React.createElement(
// //   // "h1" ,
// //   // { className : "Header" },
// //   // "Hello, React!"
// //   // );
// //   // const pElement = React.createElement(
// //   // "p" ,
// //   // { className : "Paragraph" },
// //   // "This is paragraph"
// //   // );

// //   // Define the handleClick function
// // //   const handleClick = () => {
// // //     alert("Button clicked!");
// // //   };
// // //   return (
// // //     <div>
// // //       <h1 className="Header">Hello, Deepu's React!</h1>
// // //       <button onClick={handleClick}> Click Me </button>
// // //       <p className="Paragraph">This is paragraph</p>
// // //     <>
// // //     <Contact/>
// // //     <AboutPage/>
// // //     <Dashboard/>
// // //     <Calculateage/>
// // //     </>
// // //     </div>
// // //   );
// // // };

// // // export default App;

// // // import { useState } from 'react'

// // // function Counter () {
// // // const [ count , setCount ] = useState ( 0 ) // Declare state
// // // return (
// // // <div>
// // // <p> Count: {count} </p>
// // // <button onClick = { () => setCount (count => count + 2 ) } > Increment </button>
// // // </div>
// // // )
// // // }
// // // export default Counter;

// // function App() {
// //   const [name,setName] = useState("Deepu");

// //   return (
// //     <UserContext.Provider value={{name , setName}} >                 
// //       <Child/>
// //     </UserContext.Provider>
// //   );
// // }

// //   export default App;

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

// const App = () => {
//   // Access state from the store
//   const count = useSelector((state) => state.count);

//   // Create dispatch function
//   const dispatch = useDispatch();

//   // Dispatch the increment action
//   const handleIncrement = () => {
//     dispatch({ type: "INCREMENT" });
//   };

//   // Fetch users when component mounts
//   useEffect(() => {
//     const fetchUsers = async () => {
//       const response = await fetch("https://jsonplaceholder.typicode.com/users");
//       const data = await response.json();
//       dispatch({ type: "FETCH_USERS", payload: data });
//     };
//     fetchUsers();
//   }, [dispatch]);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Redux Counter Example</h1>
//       <h2>Counter: {count}</h2>
//       <button onClick={handleIncrement}>Increment</button>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import Counter from './Components/counter/index.jsx';
import Users from './User/index.jsx';

const App = () => {
  return (
    <div>
      <Counter/>
      <Users/>
      </div>
  );
};

export default App;