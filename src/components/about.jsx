import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>О проекте</h2>
              <p>Megapets - проект по воссозданию тамагочи из 90-х на современном железе. 
              Основная цель проекта сделать редкие программы более доступными, поскольку
              со временем тамагочи становится все сложнее и сложнее достать.
              Исходный код проекта закрытый, но все необходимое для сборки своего тамагочи
              находится в свободном доступе.
              Видеоинструкция по сборке доступна по <a href="https://www.youtube.com/watch?v=rYkZjc-RfL4">ссылке</a>. 
              Также тамагочи можно заказать напрямую по контактам внизу.
              Проект был вдохновлен книгой "Карманная энциклопедия тамагочи" и
              флеш картриджами для ретро консолей.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
