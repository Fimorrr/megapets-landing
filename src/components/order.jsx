import { Image } from "./image";
import React from "react";
import { useState } from "react";

export const Order = (props) => {
  const [selectedShell, setSelectedShell] = useState("TWhite");
  const [selectedButton, setSelectedButton] = useState("White");

  function clickShellButton(shellColor) {
    setSelectedShell(shellColor);
  }

  function clickColorButton(buttonColor) {
    setSelectedButton(buttonColor);
  }

  const shellColors = [
    {
      code: "TWhite",
      color: "white",
      text: "Белый (Полупр.)",
      textColor: "black"
    },
    {
      code: "Blue",
      color: "darkblue",
      text: "Синий (Полупр.)"
    },
    {
      code: "Red",
      color: "red",
      text: "Красный (Полупр.)"
    },
    {
      code: "Green",
      color: "darkgreen",
      text: "Темно-зеленый (Полупр.)"
    },
    {
      code: "Yellow",
      color: "yellow",
      text: "Желтый",
      textColor: "black"
    },
    {
      code: "White",
      color: "#FFFFFA",
      text: "Белый",
      textColor: "black"
    },
    {
      code: "Gray",
      color: "gray",
      text: "Серый",
      textColor: "white"
    },
    {
      code: "Black",
      color: "black",
      text: "Черный"
    },
    {
      code: "Pink",
      color: "pink",
      text: "Розовый",
      textColor: "black"
    },
    {
      code: "Cyan",
      color: "cyan",
      text: "Бирюзовый",
      textColor: "black"
    },
    {
      code: "Purple",
      color: "purple",
      text: "Фиолетовый"
    },
    {
      code: "LGreen",
      color: "green",
      text: "Светло-зеленый"
    }
  ];

  const buttonColors = [
    {
      code: "White",
      color: "white",
      text: "Белый",
      textColor: "black"
    },
    {
      code: "Gray",
      color: "#DDDDDD",
      text: "Серый",
      textColor: "black"
    },
    {
      code: "Black",
      color: "black",
      text: "Черный"
    },
    {
      code: "Red",
      color: "red",
      text: "Красный"
    },
    {
      code: "Green",
      color: "green",
      text: "Зеленый"
    },
    {
      code: "Yellow",
      color: "yellow",
      text: "Желтый",
      textColor: "black"
    },
    {
      code: "Blue",
      color: "blue",
      text: "Синий"
    }
  ];
  
  let smallImage = "img/shell/";

  shellColors.forEach((shell) => {
    if (shell.code === selectedShell) {
      smallImage += shell.code;
    }
  });

  smallImage += "/";

  buttonColors.forEach((button) => {
    if (button.code === selectedButton) {
      smallImage += button.code;
    }
  });

  smallImage += ".jpg";

  return (
    <div id="order" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Сделать заказ</h2>
          <img src={smallImage} className="order-image" style={{width: "400px"}}/>
          <h3>Корпус</h3>
          <div id="row" className="order-buttons">
            {shellColors.map(item => (
              <button onClick={() => clickShellButton(item.code)} className="col-md-2 col-sm-4 order-button" style={{
                color: item.textColor ? item.textColor : "white",
                backgroundColor: item.color,
                border: "solid black",
                outline: selectedShell == item.code ? "3px solid red" : ""
              }}>{item.text}</button> 
            ))}
          </div>
          <h3>Кнопки</h3>
          <div className="order-buttons">
            {buttonColors.map(item => (
              <button onClick={() => clickColorButton(item.code)} className="order-button" style={{
                color: item.textColor ? item.textColor : "white",
                backgroundColor: item.color,
                border: "solid black",
                outline: selectedButton == item.code ? "3px solid red" : ""
              }}>{item.text}</button> 
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
