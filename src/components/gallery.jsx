import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {

  const programs = [
    {
      "img": "img/team/01.jpg",
      "name": "MGA",
      "job": "Вся классическая линейка MGA, а также редкий MGA baby. Всего 12 питомцев."
    },
    {
      "img": "img/team/02.jpg",
      "name": "Apollo 6 in 1",
      "job": "6 оригинальных питомцев, и в дополнение 6 новых. Всего 12 питомцев."
    },
    {
      "img": "img/team/03.jpg",
      "name": "Dinkie",
      "job": "8 оригинальных питомцев с расширенными чартами, а также 9-й питомец кот. Всего 9 питомцев."
    },
    {
      "img": "img/team/04.jpg",
      "name": "Hitorikko",
      "job": "7 классических хиторикко, включая редких ангела и рыбку тюну. В дополнение к ним 13 новых. Всего 20 питомцев."
    },
  ];

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Обзор программ</h2>
          <p>
            На данный момент реализовано 4 программы тамагочи
          </p>
        </div>
        <div id="row">
          {programs.map((item, i) => (
                <div key={`${item.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src="img/device.png" alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{item.name}</h4>
                      <p>{item.job}</p>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};
