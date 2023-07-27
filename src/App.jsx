/* eslint-disable no-unused-vars */
// import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import FlipCoin from "./components/FlipCoin";
import SucSacRandom from "./components/SucSacRandom";
import Color from "./components/Color";
import Monney from "./components/Monney";
function App() {
  // luôn luôn gọi useState ở đầu của component
  // useState(0) => trả về [state, setState]
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount((prevState) => ++prevState);
  };
  const decrease = () => {
    setCount((prevState) => --prevState);
  };
  return (
    <div className="App">
      <Monney />
      {/* <Color /> */}
      {/* <SucSacRandom /> */}
      {/* <FlipCoin /> */}
      {/* <h1>Counter</h1>
      <Button content="Increase (+)" method={increase} />
      <span className="result">{count}</span>
      <Button content="Decrease (-)" method={decrease} /> */}
    </div>
  );
}

export default App;
