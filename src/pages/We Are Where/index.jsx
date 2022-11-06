import React from "react";
export default function WeAreWhere() {
  return (
    <div className="we-are-where w-full min-h-screen flex justify-center items-center">
      <div className="elements flex flex-col gap-24 text-white font-['Roboto'] font-light">
        <h1 className="text-2xl ">МЫ ТАМ, ГДЕ:</h1>
        <ul className="flex flex-col gap-3 text-2xl">
          <li>
            <span className="inline-block w-3 h-3 bg-white mb-2 mr-2"></span>{" "}
            Требуется высокое качество ремонтных работ
          </li>
          <li>
            <span className="inline-block w-3 h-3 bg-white mb-2 mr-2"></span>{" "}
            Нужно четко соблюсти Бюджет
          </li>
          <li>
            <span className="inline-block w-3 h-3 bg-white mb-2 mr-2"></span>{" "}
            Необходимо ответственно подойти к процессу
          </li>
        </ul>
      </div>
    </div>
  );
}
