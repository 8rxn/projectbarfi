import { useState } from "react";
import "./App.css";
import Button from "./components/shared/Button";
import { Route,Routes } from "react-router";
import { Clan, Friends, Home } from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<><div className="bg-gradient-to-b from-bg-primary to-bg-secondary text-color-primary w-screen h-screen grid place-items-center">
        <h1>hello tribe</h1>
        <Button>Register</Button>
        <Button>Sign in</Button>
      </div></>}>
        
        </Route>

        <Route path="/comrade" element={<Friends/>}/>
        <Route path="/clan" element={<Clan/>}/>

        {/* This will be default path when login will be setup */}
        <Route path="/home" element={<Home/>}/>
      </Routes>
      </>
  );
}

export default App;
