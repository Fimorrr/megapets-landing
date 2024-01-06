import { Image } from "./image";
import React from "react";
import { useState } from "react";

export const Order = (props) => {
  const smallImage = "img/portfolio/01-small.jpg";

  const [selectedShell, setSelectedShell] = useState("white");
  const [selectedButton, setSelectedButton] = useState("white");

  function clickShellButton(shellColor) {
    setSelectedShell(shellColor);
  }

  function clickColorButton(buttonColor) {
    setSelectedButton(buttonColor);
  }

  const shellColors = [
    {
      color: "white",
      text: "Белый (Полупр.)",
      textColor: "black"
    },
    {
      color: "darkblue",
      text: "Синий (Полупр.)"
    },
    {
      color: "red",
      text: "Красный (Полупр.)"
    },
    {
      color: "darkgreen",
      text: "Темно-зеленый (Полупр.)"
    },
    {
      color: "blue",
      text: "Синий (Люминесц.)"
    },
    {
      color: "yellow",
      text: "Желтый (Люминесц.)",
      textColor: "black"
    },
    {
      color: "#FFFFFA",
      text: "Белый",
      textColor: "black"
    },
    {
      color: "gray",
      text: "Серый",
      textColor: "white"
    },
    {
      color: "black",
      text: "Черный"
    },
    {
      color: "pink",
      text: "Розовый",
      textColor: "black"
    },
    {
      color: "cyan",
      text: "Бирюзовый",
      textColor: "black"
    },
    {
      color: "purple",
      text: "Фиолетовый"
    },
    {
      color: "green",
      text: "Светло-зеленый"
    }
  ];

  const buttonColors = [
    {
      color: "white",
      text: "Белый",
      textColor: "black"
    },
    {
      color: "#DDDDDD",
      text: "Серый",
      textColor: "black"
    },
    {
      color: "black",
      text: "Черный"
    },
    {
      color: "red",
      text: "Красный"
    },
    {
      color: "green",
      text: "Зеленый"
    },
    {
      color: "yellow",
      text: "Желтый",
      textColor: "black"
    },
    {
      color: "blue",
      text: "Синий"
    }
  ];

  return (
    <div id="order" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Сделать заказ</h2>
          <img src={smallImage} className="order-image"/>
          <h3>Корпус</h3>
          <div id="row" className="order-buttons">
            {shellColors.map(item => (
              <button onClick={() => clickShellButton(item.color)} className="col-md-2 col-sm-4 order-button" style={{
                color: item.textColor ? item.textColor : "white",
                backgroundColor: item.color,
                border: "solid black",
                outline: selectedShell == item.color ? "3px solid red" : ""
              }}>{item.text}</button> 
            ))}
          </div>
          <h3>Кнопки</h3>
          <div className="order-buttons">
            {buttonColors.map(item => (
              <button onClick={() => clickColorButton(item.color)} className="order-button" style={{
                color: item.textColor ? item.textColor : "white",
                backgroundColor: item.color,
                border: "solid black",
                outline: selectedButton == item.color ? "3px solid red" : ""
              }}>{item.text}</button> 
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
