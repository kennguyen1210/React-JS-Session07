/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import React from "react";
import Button from "./Button";
export default function FlipCoin() {
  const [state, setState] = useState({
    // head: "https://www.pcgs.com/UserImages/60183431o.jpg",
    head: "/src/components/coin_img/head.jpg",
    // tail: "https://www.pcgs.com/UserImages/60183431r.jpg",
    tail: "/src/components/coin_img/tail.jpg",
    countHead: 0,
    countTail: 0,
    countTotalFlip: 0,
    img: "",
  });
  function handleFlip() {
    setState((prevState) => {
      let flip = Math.floor(Math.random() * 2);
      if (flip) {
        return {
          ...prevState,
          img: prevState.head,
          countHead: prevState.countHead + 1,
          countTotalFlip: prevState.countTotalFlip + 1,
        };
      }
      return {
        ...prevState,
        img: prevState.tail,
        countTail: prevState.countTail + 1,
        countTotalFlip: prevState.countTotalFlip + 1,
      };
    });
  }
  return (
    <div className="FlipCoin">
      <h2>Let's flip a coin</h2>
      <img src={state.img} alt="coin image" />
      <br />
      <Button method={handleFlip} content="FLIP MEEEE" />
      <p>
        Out of <b>{state.countTotalFlip}</b> flips, there have been{" "}
        <b>{state.countHead}</b>
        heads and <b>{state.countTail}</b> tails
      </p>
    </div>
  );
}
