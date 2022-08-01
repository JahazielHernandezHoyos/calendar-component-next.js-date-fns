import { getYear, getMonth, getDate } from "date-fns";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(getMonth(date));
  const [year, setYear] = useState(getYear(date));
  console.log(getMonth(new Date(month)));

  //traer todos los dias del mes actual
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  //traer el dia de la semana del primer dia del mes
  const firstDay = new Date(year, month, 1).getDay();
  //traer el dia de la semana del ultimo dia del mes
  const lastDay = new Date(year, month + 1, 0).getDay();

  const handlePrevious = () => {
    if (month > 0) {
      setMonth(month - 1);
    } else {
      setMonth(12);
      setYear(year - 1);
    }
    if (month === 1) {
      setMonth(12);
    }
  };

  const handleNext = () => {
    if (month < 12) {
      setMonth(month + 1);
    } else {
      setMonth(1);
      setYear(year + 1);
    }
    if (month === 12) {
      setMonth(1);
    }
  };

  const handleYear = () => {
    setYear(year + 1);
  };

  const handleYearPrevious = () => {
    setYear(year - 1);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-gray-900">
        <h1 className="pb-20 text-white tracking-wide leading-8 underline decoration-pink-500 decoration-4 text-3xl font-bold font-mono w-100 h-100">
          Calendar Component
        </h1>
        <div className="box-content bg-slate-900">
          <div className="flex justify-between">
            <div className="flex items-center">
              <button className="btn-previous" onClick={handleYearPrevious}>
                <i className="p-3 rounded-tl-3xl bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white">
                  ↶
                </i>
              </button>
              <button className="btn-previous" onClick={handlePrevious}>
                <i className="p-3 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white">
                  ↢
                </i>
              </button>
              <div className="pl-5 pr-5 bg-white text-2xl">{`${month} / ${year}`}</div>
              <button className="btn-next" onClick={handleNext}>
                <i className="p-3 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white">
                  ↣
                </i>
              </button>
              <button className="btn-next" onClick={handleYear}>
                <i className="p-3 rounded-tr-3xl bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white">
                  ↷
                </i>
              </button>
            </div>
          </div>
        </div>
        <table className="table-auto w-1/2 h-1/2">
          <thead className="bg-violet-500">
            <tr className="text-white sm:text-left">
              <th className="px-4 py-2 ">Lun</th>
              <th className="px-4 py-2">Mar</th>
              <th className="px-4 py-2">Mie</th>
              <th className="px-4 py-2">Jue</th>
              <th className="px-4 py-2">Vie</th>
              <th className="px-4 py-2">Sab</th>
              <th className="px-4 py-2">Dom</th>
            </tr>
          </thead>
          <tbody className="bg-gray-900">
            {/* filas */}
            {Array.from({ length: Math.ceil(daysInMonth / 7) }).map((_, i) => {
              //columnas
              return (
                <tr key={i} className="text-white text-center">
                  {/* dias */}
                  {Array.from({ length: 7 }).map((_, j) => {
                    const day = i * 7 + j + 1 - firstDay;
                    if (day > 0 && day <= daysInMonth) {
                      return (
                        <td key={j} className="px-4 py-2">
                          {day}
                        </td>
                      );
                    }
                    return <td key={j} className="px-4 py-2" />;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
    </>
  );
}
