import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    setCounter(counter + 1);
  };
  //why did we put h1 of counter?
  //setCounter why did we use brackets and not = ????
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>{counter}</h1>
      <button
        onClick={addOne}
        style={{
          fontFamily: "serif",
        }}
      >
        Click Me!
      </button>
    </div>
  );
}

export default App;
