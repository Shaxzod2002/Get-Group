import React, {useRef} from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiXMark, HiBars3CenterLeft } from "react-icons/hi2";
import logo from "../../images/logo.png";

export default function Navbar() {
  const menu = document.getElementById("menu");
  const phoneBlock = document.getElementById("phone-block");
  const handleMenuActive = () => {
    menu.style.scale = "0";
  };
  const handleMenuNotActive = () => {
    menu.style.scale = "1";
  };
  
  const handlePhoneActive = () => {
    phoneBlock.style.scale = "1";
  };

  const handlePhoneNotActive = () => {
    phoneBlock.style.scale = "0"
  };
  return (
    <>
      <nav
        className="flex justify-between items-center px-3 w-full min-h-[60px] bg-[#333333b1]"
        id="nav"
      >
        <div
          className="menu-bar text-white text-[40px] cursor-pointer"
          onClick={handleMenuNotActive}
        >
          <HiBars3CenterLeft />
        </div>
        <div className="logo-branding relative w-56 min-h-[60px] flex justify-center">
          <img src={logo} alt="navbar logo" className="absolute top-5 w-44" />
        </div>
        <div
          className="phone-number  text-white text-[25px] pr-5 cursor-pointer"
          onClick={handlePhoneActive}
        >
          <BsFillTelephoneFill />
        </div>
      </nav>
      <menu id="menu" className="min-w-full bg-white absolute top-0 p-2 duration-500">
        <div className="left min-h-screen w-1/2 flex flex-col pl-[10%] gap-3">
          <h4 className="font-black text-3xl">Завершение</h4>
          <p className="font-medium text-xl">
            Заполните ваши данные для обрвтной связи и мы вам позвоним
          </p>
          <form action="#" className="flex flex-col gap-5">
            <input
              type="text"
              name="number"
              placeholder="Введите ваш номер телефона"
              className="py-5 px-4 w-[80%] flex items-center border"
            />
            <input
              type="email"
              name="email"
              placeholder="Введите ваш E-mail"
              className="py-5 px-4 w-[80%] flex items-center border"
            />
            <div className="storage flex gap-1 items-center">
              <input
                type="checkbox"
                id="check"
                className="text-white bg-black"
              />
              <label htmlFor="check">
                Я согласен на{" "}
                <a href="#" className="underline">
                  обработку персональных данных
                </a>
              </label>
            </div>
            <div className="btn-group flex flex-col gap-10 mt-10">
              <button
                type="submit"
                className="w-[80%] py-5 flex justify-center transition-all border border-white items-center bg-[#FAFF09] font-medium text-2xl hover:border-[#FAFF09] hover:bg-white"
              >
                Оставить заявку
              </button>
              <button className="w-[80%] py-5 flex justify-center items-center transition-all bg-[#fff] font-normal text-2xl border border-black hover:bg-black hover:text-white">
                Задать вопрос менеджеру
              </button>
            </div>
          </form>
        </div>
        <div className="right min-h-[calc(100vh-60px)] w-1/2 flex flex-col items-end px-10 gap-10">
          <div
            className="exit text-4xl font-thin cursor-pointer"
            onClick={handleMenuActive}
          >
            <HiXMark />
          </div>
          <div className="catalog-of-works w-[350px] min-h-[180px] border border-black">
            <div className="image h-[120px] flex flex-col justify-center items-center">
              <img src={logo} alt="logo 1" className="w-24" />
              <p className="text-white text-[10px]">Каталог работ</p>
            </div>
            <h2 className="text-2xl text-center mt-3">Каталог работ</h2>
          </div>
          <div className="design-selection w-[350px] min-h-[180px] border border-black">
            <div className="image h-[120px] flex flex-col justify-center items-center">
              <img src={logo} alt="logo 1" className="w-24" />
              <p className="text-white text-[10px]">Журанал дизайна</p>
            </div>
            <h2 className="text-2xl text-center mt-3">Журанал дизайна</h2>
          </div>
          <div className="back__to__top-group flex items-center gap-10">
            <div className="btn-group flex gap-5">
              <button className="w-5 h-5 bg-[#4F4F4F]"></button>
              <button className="w-5 h-5 bg-[#4F4F4F]"></button>
              <button className="w-5 h-5 bg-[#4F4F4F]"></button>
              <button className="w-5 h-5 bg-[#4F4F4F] btn-active"></button>
            </div>
            <button className="py-5 px-4 flex items-center border transition-all border-black font-thin text-2xl hover:bg-black hover:text-white">
              Вернуться в начало
            </button>
          </div>
        </div>
      </menu>
      <div className="phone-block w-[60%] min-h-[450px] bg-white/90 absolute left-[20%] top-[calc(50%-180px)] flex flex-col justify-center duration-500" id="phone-block">
        <div className="exit cursor-pointer text-3xl absolute top-5 right-10" onClick={handlePhoneNotActive}>
          <HiXMark />
        </div>
        <form
          action="#"
          className="flex flex-col justify-center items-center gap-5"
        >
          <p>Обратный звонок</p>
          <input
            type="text"
            name="fname"
            className="py-5 w-[60%] border border-black pl-5 placeholder:text-black"
            placeholder="Ваше имя"
          />
          <input
            type="text"
            name="phone"
            className="py-5 w-[60%] border border-black pl-5 placeholder:text-black"
            placeholder="Номер телефона"
          />
          <button
            type="submit"
            className="py-5 w-[60%] border border-white/90 pl-5 bg-[#FAFF09] text-2xl font-bold"
          >
            Позвонить мне
          </button>
        </form>
      </div>
    </>
  );
}
