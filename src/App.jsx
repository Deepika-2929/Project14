import React from 'react';

const App = () => {
  // const h1Element = React.createElement(
  // "h1" ,
  // { className : "Header" },
  // "Hello, React!"
  // );
  // const pElement = React.createElement(
  // "p" ,
  // { className : "Paragraph" },
  // "This is paragraph"
  // );

  // Define the handleClick function
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <div>
      <h1 className="Header">Hello, Deepu's React!</h1>
      <button onClick={handleClick}> Click Me </button>
      <p className="Paragraph">This is paragraph</p>
    </div>
  );
};

export default App;
