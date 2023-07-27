/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import Button from "./Button";
import Dice from "./Dice";
export default function SucSacRandom() {
  const [state, setState] = useState({
    dive: ["one", "two", "three", "four", "five", "six"],
    dive1: "one",
    dive2: "six",
    disabled: "",
    content: "Roll Dive!!!",
    shaking: false,
  });
  function handleRoll() {
    let number1 = Math.floor(Math.random() * 6);
    let number2 = Math.floor(Math.random() * 6);
    setState((prevState) => {
      return {
        ...prevState,
        content: "Rolling ...",
        disabled: "disabled",
        dive1: prevState.dive[number1],
        dive2: prevState.dive[number2],
        shaking: true,
      };
    });
    setTimeout(() => {
      setState((prevState) => {
        return {
          ...prevState,
          content: "Roll Dive !!!",
          disabled: "",
          shaking: false,
        };
      });
    }, 1000);
  }
  return (
    <div className="SucSacRandom">
      <div className="dice">
        <Dice dive={state.dive1} shaking={state.shaking} />
        <Dice dive={state.dive2} shaking={state.shaking} />
      </div>
      <Button
        disabled={state.disabled}
        method={handleRoll}
        content={state.content}
      />
    </div>
  );
}
