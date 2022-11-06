import React, { useState, useEffect } from "react";
import axios from "axios";

const mainServicesUrl = "jsons/Home/Main Services/index.json";

export default function MainServices() {
  const [mainServices, setMainServices] = useState([]);
  useEffect(() => {
    const showMainServices = async () =>
      setMainServices(await (await axios.get(mainServicesUrl)).data);
    showMainServices();
  }, []);
  return (
    <div className="main-services w-full min-h-[110vh]">
      <h1 className="text-[48px] ml-10 mt-10 font-['Roboto'] font-light">
        ОСНОВНЫЕ УСЛУГИ
      </h1>
      <div className="line w-[200px] h-[10px] bg-black"></div>
      <div className="yard-designs w-[90%] mx-auto my-10 flex">
        {mainServices.map((main) => (
          <div
            key={main.id}
            className="w-1/4 min-h-[95vh] border flex flex-col gap-4"
          >
            <img src={main.image} alt={"image" + main.id} />
            <div>
              <p>
                <span className="inline-block w-[10px] h-[10px] bg-[#4F4F4F]"></span>
              </p>
              <h2 className="text-3xl font-medium  pl-2">{main.heading}</h2>
            </div>
            <p className="text-[15px] font-normal text-[#4F4F4F] pr-14 pl-2">{main.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
