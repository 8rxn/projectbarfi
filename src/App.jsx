import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gradient-to-b from-bg-primary to-bg-secondary text-color-primary w-screen h-screen grid place-items-center">
        <h1>hello tribe</h1>
        <button className="bg-gradient-to-r from-color-primary to-color-secondary rounded-3xl py-2 px-5 text-bg-primary">
          Hey!
        </button>
      </div>
    </>
  );
}

export default App;
