import React, { useState, useEffect } from "react";
import axios from "axios";
const resultsUrl = "jsons/Home/Results/index.json";

export default function Results() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    const setResultApi = async () =>
      setResult(await (await axios.get(resultsUrl)).data);
    setResultApi();
  }, []);
  return (
    <div className="w-[95%] mx-auto my-10 min-h-[0] flex bg-[#F2F2F2]">
      {result.map((res) => (
        <div
          className="w-1/4 p-5 flex flex-col gap-3"
          key={res.id}
        >
          <h1 className="text-4xl">{res.number}</h1>
          <h4 className="flex items-center gap-1">
            <span className="inline-block w-5 h-5 bg-black"></span>
            {res.heading}
          </h4>
          <p>{res.paragraph}</p>
        </div>
      ))}
    </div>
  );
}
