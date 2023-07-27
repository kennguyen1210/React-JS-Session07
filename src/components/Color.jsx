/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import DivColor from "./DivColor";
export default function Color() {
  const [colors, setColors] = useState([
    {
      id: 1,
      color: "#33FF66",
    },
    {
      id: 2,
      color: "#999999",
    },
    {
      id: 3,
      color: "#FF0000",
    },
    {
      id: 4,
      color: "#FFFF99",
    },
    {
      id: 5,
      color: "#FFCCCC",
    },
    {
      id: 6,
      color: "#00CCFF",
    },
    {
      id: 7,
      color: "#FF9900",
    },
    {
      id: 8,
      color: "#CC99CC",
    },
    {
      id: 9,
      color: "#3366CC",
    },
    {
      id: 10,
      color: "#008800",
    },
    {
      id: 11,
      color: "#0000EE",
    },
    {
      id: 12,
      color: "#000011",
    },
    {
      id: 13,
      color: "#FFFFFF",
    },
    {
      id: 147,
      color: "#00FF00",
    },
    {
      id: 15,
      color: "#999900",
    },
    {
      id: 16,
      color: "#996633",
    },
    {
      id: 17,
      color: "#006666",
    },
    {
      id: 18,
      color: "#003300",
    },
  ]);
  function handleClick(id) {
    let random = Math.floor(Math.random() * 18);
    console.log(random);
    let newColors = [...colors];
    newColors[id - 1].color = newColors[random].color;

    setColors(newColors);
  }
  return (
    <div className="Color">
      <div className="container">
        <div className="row">
          {colors.map((color) => {
            return (
              <DivColor
                id={color.id}
                key={color.id}
                color={color.color}
                method={handleClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
