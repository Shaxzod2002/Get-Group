import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoReloadOutline } from "react-icons/io5";
const ourProjectUrl = "jsons/Home/Our Project/index.json";
export default function OurProject() {
  const [ourProject, setOurProject] = useState([]);

  useEffect(() => {
    const showOurProject = async () =>
      setOurProject(await (await axios.get(ourProjectUrl)).data);
    showOurProject();
  }, []);
  if (!ourProject) return null;

  const handleOurProject = () => {};

  return (
    <div className="w-full min-h-screen">
      <h1 className="text-[48px] ml-10 font-['Roboto'] font-light">
        НАШИ ПРОЕКТЫ
      </h1>
      <div className="line w-[200px] h-[10px] bg-black"></div>
      <div className="home-design w-[90%] mx-auto min-h-[100vh] flex mt-1 flex-wrap">
        {ourProject.map((project, index) =>
          index < 6 ? (
            <div
              className="design w-1/3 min-h-[95vh] flex flex-col"
              key={project.id}
            >
              <div className="home-design-image  w-full cursor-pointer relative">
                <img src={project.image} alt={"image" + project.id} />
                <div className="view-project absolute w-full h-full flex top-0 bg-black/70 justify-center items-center">
                  <a
                    href="/"
                    className="py-3 px-10 border-[1px] border-white text-white hover:bg-[#E2E2E2] hover:text-black"
                  >
                    Смотреть проект
                  </a>
                </div>
              </div>
              <h3 className="text-[20px] font-['Roboto'] font-normal">
                {project.heading}
              </h3>
              <p className="text-[15px] font-['Roboto'] font-light text-[#4F4F4F]">
                {project.paragraph}
              </p>
              <p className="text-[12px] font-['Roboto'] font-light text-[#4F4F4F]">
                {project.size}
              </p>
            </div>
          ) : null
        )}
        <div className="w-full flex justify-center pb-5">
          <button
            className="bg-black transition-all text-white py-3 px-10 flex items-center gap-2 hover:bg-[#535353] hover:text-[#F2F2F2]"
            onClick={handleOurProject}
          >
            <IoReloadOutline className="-rotate-[75deg]" />
            Еще проекты
          </button>
        </div>
      </div>
    </div>
  );
}
