import React, { useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaTiktok,
  FaWhatsappSquare,
  FaTelegramPlane,
} from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import logo from "../../images/home/Navbar/Logo.png";
import treangle from "../../images/Footer/treangle.png";
import axios from "axios";
const footerUrl = "jsons/Home/Footer/index.json";

export default function Footer() {
  const [footer, setFooter] = useState();

  useEffect(() => {
    const showFooter = async () =>
      setFooter(await (await axios.get(footerUrl)).data);
    showFooter();
  }, []);

  if (!footer) return null;
  return (
    <div className="footer w-full min-h-[130vh] flex flex-col items-center">
      <div className="w-full flex">
        <div className="flex flex-col left w-[61%] min-h-[130vh] justify-center items-start gap-4 pl-10 relative">
          <img
            src={treangle}
            alt="treangle"
            className="w-32 absolute top-20 right-0"
          />
          <img src={logo} alt="logo" className="mt-[200px] w-40" />
          <div className="w-full min-h-[200px] flex gap-24">
            <div className="flex flex-col mt-10">
              <h4 className="text-[#FAFF09] font-['Roboto'] text-xl font-normal mb-5">
                Компания gid
              </h4>
              {footer[0].company_guide.map((item) => {
                return (
                  <div className="flex flex-col">
                    <a href="/" className="text-white my-2">
                      {item}
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col mt-10">
              <h4 className="text-[#FAFF09] font-['Roboto'] text-xl font-normal mb-5">
                Проекты
              </h4>
              {footer[0].projects.map((item) => {
                return (
                  <div className="flex flex-col">
                    <a href="/" className="text-white my-2">
                      {item}
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col mt-10">
              <h4 className="text-[#FAFF09] font-['Roboto'] text-xl font-normal mb-5">
                Услуги
              </h4>
              {footer[0].services.map((item) => {
                return (
                  <div className="flex flex-col">
                    <a href="/" className="text-white my-2">
                      {item}
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col mt-10">
              <h4 className="text-[#FAFF09] font-['Roboto'] text-xl font-normal mb-5">
                Контакты
              </h4>
              {footer[0].contacts.map((item) => {
                return (
                  <div className="flex flex-col">
                    <a
                      href={
                        item === "+(7495) 555-15-05"
                          ? "tel:+74955551505"
                          : item === "info@gid.pro"
                          ? "mailto:info@gid.pro"
                          : "/"
                      }
                      className="text-white my-2"
                    >
                      {item}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="right w-[39%] min-h-[130vh] relative flex items-center">
          <a
            href="#nav"
            className="inline-flex items-center border transition-all mt-20 py-3 px-10 gap-3 -rotate-90 absolute right-20 top-0 hover:bg-[#E2E2E2] hover:text-white"
          >
            Наверх <BsArrowRight />
          </a>
          <div className="brans flex gap-8 text-4xl ml-4">
            <a
              href="/"
              className="text-white bg-black rounded-md text-[20px] mt-1 p-1 h-[30px]"
            >
              <FaTelegramPlane />
            </a>
            <a href="/">
              <AiFillInstagram />
            </a>
            <a href="/" className="rounded-lg overflow-hidden">
              <FaFacebookSquare />
            </a>
            <a href="/">
              <GrYoutube />
            </a>
            <a
              href="/"
              className="text-white bg-black text-xl rounded-md mt-1 p-1 h-[30px]"
            >
              <FaTiktok />
            </a>
            <a href="/">
              <FaWhatsappSquare />
            </a>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-['Roboto'] font-light text-[14px] mb-5">
          Gid.group 2021/ All rights reserved
        </h1>
      </div>
    </div>
  );
}
