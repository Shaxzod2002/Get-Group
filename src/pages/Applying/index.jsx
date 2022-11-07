import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
const applyingUrl = "jsons/Home/Applying/index.json";
export default function Applying() {
  const [applying, setApplying] = useState([]);
  useEffect(() => {
    const showApplying = async () =>
      setApplying(await (await axios.get(applyingUrl)).data);
    showApplying();
  }, []);
  if (!applying) return null;
  return (
    <div className="w-full min-h-screen pt-10">
      <h1 className="text-[40px] ml-10 font-['Roboto'] font-light">
        6 ЭТАПОВ ОТ ЗАЯВКИ ДО <br /> СДАЧИ ГОТОВОГО ОБЪЕКТА
      </h1>
      <div className="line w-[200px] h-[10px] bg-black"></div>
      <div className="transmission-systems w-[95%] mt-20 my-5 mx-auto min-h-[500px] flex flex-wrap gap-y-16">
        {applying.map((app) => (
          <div className="w-1/3 min-h-[50%] flex" key={app.id}>
            <div className="left w-[50px] flex justify-end mt-20">
              <h1 className="text-4xl font-semibold">{"0" + app.id}</h1>
            </div>
            <div className="right w-[calc(100%-50px)] flex flex-col justify-center items-start gap-3 pl-5">
              <img
                src={app.image}
                alt={"image" + app.id}
                className="w-[30px]"
              />
              <h3 className="inline-block font-['Roboto'] text-xl font-semibold bg-[#FAFF09] p-2">
                {app.heading}
              </h3>
              <p className="font-['Roboto'] text-[#4F4F4F] text-lg pr-28">
                {app.paragraph}
              </p>
              <p className="font-['Roboto'] text-['14px'] flex items-center gap-1">
                <IoIosCheckmarkCircleOutline className="bg-[#FAFF09] rounded-[50%]" />
                {app.paramatr}
              </p>
            </div>
          </div>
        ))}
        <button className="py-5 px-32 border flex items-center justify-center gap-4 transition-all font-['Roboto'] my-4 mx-[70px] text-2xl hover:bg-[#C4C4C4] hover:text-[#ffffff]">
          Начать <HiOutlineArrowLongRight className="text-3xl" />
        </button>
      </div>
    </div>
  );
}
