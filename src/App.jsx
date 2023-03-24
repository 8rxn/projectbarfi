import { useState } from "react";
import "./App.css";
import Button from "./components/shared/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gradient-to-b from-bg-primary to-bg-secondary text-color-primary w-screen h-screen grid place-items-center">
        <h1>hello tribe</h1>
        <Button>Register</Button>
        <Button>Sign in</Button>
      </div>
    </>
  );
}

export default App;
