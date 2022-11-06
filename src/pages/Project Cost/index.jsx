import React from "react";
import Image1 from "../../images/home/Project Cost/1.png";
import Image2 from "../../images/home/Project Cost/2.png";
export default function ProjectCost() {
  return (
    <div className="project-cost w-full min-h-[500px]">
      <h1 className="text-[48px] ml-10 font-['Roboto'] font-light">
        СТОИМОСТЬ ПРОЕКТА
      </h1>
      <div className="line w-[200px] h-[10px] bg-black"></div>
      <div className="w-[80%] mx-auto my-8 flex">
        <div className="left w-1/2 min-h-[380px] flex flex-col gap-5">
          <h1 className="text-[32px] font-normal font-['Roboto']">
            Узнайте стоимость дизайн-проекта, ответив на 3 вопроса
          </h1>
          <p className="text-[#333333] font-['Roboto'] font-normal text-[22px]">
            Пройдите короткий тест, узнайте цену, получите консультацию по
            будущему проекту
          </p>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href="#"
            className="flex w-[250px] py-4 mt-10 bg-black text-white justify-center"
          >
            Узнать стоимость
          </a>
        </div>
        <div className="right w-1/2 min-h-[380px] flex flex-col gap-5 border-l">
          <div className="image__group flex relative">
            <img src={Image1} className="w-[300px]" alt="Image1" />
            <img
              src={Image2}
              className="w-[40px] h-[40px] left-[190px] absolute"
              alt="Image2"
            />
          </div>
          <div className="elements pl-10 flex flex-col gap-3">
            <h3 className="font-['Roboto'] font-normal text-[20px]">Бонусы:</h3>
            <p className="flex gap-3 text-xl font-light text-[#333333]">
              <span className="w-[10px] h-[10px] mt-2 inline-block bg-black"></span>{" "}
              чек листы на 5 ошибок <br /> в строительстве
            </p>
            <p className="flex gap-3 text-xl font-light text-[#333333]">
              <span className="w-[10px] h-[10px] mt-2 inline-block bg-black"></span>{" "}
              5 трендов 2021 года на дизайн <br /> интерьеров
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
