import React from "react";

function Data(props) {
  return <h1>{props.name}</h1>;
}

function App() {
  return (
    <div>
      <Data name="safuvan" />
    </div>
  );
}

export default App;
