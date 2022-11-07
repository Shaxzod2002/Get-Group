import React, { useState, useEffect } from "react";
import axios from "axios";
import Image1 from "../../images/home/Project Cost/1.png";
import Image2 from "../../images/home/Project Cost/2.png";
import { HiXMark } from "react-icons/hi2";
const resultsUrl = "jsons/Home/Results/index.json";
const costUrl = "jsons/Home/Project Cost/index.json";

export default function ProjectCost() {
  const [result, setResult] = useState([]);
  const [cost, setCost] = useState([]);

  useEffect(() => {
    const setResultApi = async () =>
      setResult(await (await axios.get(resultsUrl)).data);
    setResultApi();
    const setCostApi = async () =>
      setCost(await (await axios.get(costUrl)).data);
    setCostApi();
  }, []);

  function handleImageBox() {}
  return (
    <div id="project-cost" className="relative">
      <div className="w-[95%] mx-auto my-10 min-h-[0] flex bg-[#F2F2F2]">
        {result.map((res) => (
          <div className="w-1/4 p-5 flex flex-col gap-3" key={res.id}>
            <h1 className="text-4xl">{res.number}</h1>
            <h4 className="flex items-center gap-1">
              <span className="inline-block w-5 h-5 bg-black"></span>
              {res.heading}
            </h4>
            <p>{res.paragraph}</p>
          </div>
        ))}
      </div>
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
            <button
              className="flex w-[250px] py-4 mt-10 transition-all bg-black text-white justify-center hover:bg-[#535353] hover:text-[#F2F2F2]"
              onClick={handleImageBox}
            >
              Узнать стоимость
            </button>
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
              <h3 className="font-['Roboto'] font-normal text-[20px]">
                Бонусы:
              </h3>
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
      <div className="absolute w-full min-h-[120vh] bg-[#000000CC] top-0 left-0 flex justify-center items-center">
        <div className="flex flex-col gap-5 w-[90%] min-h-[85vh] bg-white mt-10  pt-5 pb-3 px-20 relative">
          <div className="exit absolute right-20 text-4xl">
            <HiXMark />
          </div>
          <div className="question flex items-start gap-5">
            <h2 className="text-xl font-semibold">Вопрос 2:</h2>
            <p>
              Какой стиль лучше подходит для вашего <br /> проекта?
            </p>
          </div>
          <div className="images-box w-full flex flex-wrap border justify-between content-between">
            {cost.map((cost) => (
              <div
                className="flex flex-col items-center box w-[32%]"
                key={cost.id}
              >
                <img
                  src={cost.image}
                  className="duration-500 border-[10px] border-white hover:border-[10px] hover:border-[#FAFF09]"
                  alt={"image" + cost.id}
                />
                <p>{cost.paragraph}</p>
              </div>
            ))}
          </div>
          <div className="btn-group w-full flex justify-between items-center text-2xl font-thin">
            <button className="py-3 px-20 transition-all border border-black hover:bg-[#C4C4C4]">
              Назад
            </button>
            <div className="btn__group flex gap-8 ml-60">
              <button className="w-5 h-5 bg-[#4F4F4F]"></button>
              <button className="w-5 h-5 bg-[#FAFF09]"></button>
              <button className="w-5 h-5 bg-[#4F4F4F]"></button>
              <button className="w-5 h-5 bg-[#4F4F4F]"></button>
            </div>
            <button className="py-3 px-20 transition-all border border-black hover:bg-[#C4C4C4]">
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
