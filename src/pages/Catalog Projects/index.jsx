import React from "react";
import background from "../../images/home/Catalog Projects/bg.png";
export default function CatalogProjects() {
  return (
    <div className="w-full min-h-screen">
      <h1 className="text-[48px] ml-10 font-['Roboto'] font-light my-3">
        ПОЛУЧИТЕ КАТАЛОГ <br /> НАШИХ ПРОЕКТОВ
      </h1>
      <div className="line w-[200px] h-[10px] bg-black"></div>
      <div className="flex py-4">
        <div className="left w-1/2 py-4 pl-10">
          <img src={background} alt="theme" />
        </div>
        <div className="right w-1/2 pl-20 pr-40 flex flex-col gap-5 font-['Roboto']">
          <h2 className="text-[32px] font-semibold">
            Оставьте ваш E-mail, чтобы получить каталог наших проектов
          </h2>
          <p className="text-[#4F4F4F] text-[24px]">
            Каталог поможет вам выбрать стиль и продумать планировку квартиры
          </p>
          <form action="/" className="flex flex-col gap-5">
            <input
              type="email"
              placeholder="Введите ваш E-mail"
              name="email"
              required
              className="w-full py-4 px-5 border border-black"
            />
            <div className="flex gap-2">
              <input type="checkbox" id="check" />
              <label htmlFor="check" className="text-[#333333]">
                Я согласен на обработку персональных данных
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-4 px-6 bg-black text-white"
            >
              Получить каталог
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
