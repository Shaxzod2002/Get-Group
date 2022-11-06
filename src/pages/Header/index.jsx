/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Header() {
  return (
    <>
      <header className="w-full flex flex-col justify-center items-center gap-[100px]">
        <h1 className="text-colorFFFFFF">Лучшее для лучших</h1>
        <div className="btn-group flex gap-[50px]">
          <a
            href="#"
            area-hidden={"true"}
            className="w-[250px] py-[10px] flex justify-center items-center bg-[#11111199] border-color-[#F2F2F2] border-[1px] text-colorF2F2F2 hover:text-[#000] hover:bg-colorFFFFFF"
          >
            Проекты
          </a>
          <a
            href="#"
            area-hidden={"true"}
            className="w-[250px] py-[10px] flex justify-center items-center bg-[rgba(17,17,17,.6)] border-colorF2F2F2 border-[1px] text-colorF2F2F2 hover:text-[#000] hover:bg-colorFFFFFF"
          >
            Расчитать стоимость
          </a>
        </div>
      </header>
    </>
  );
}
