import React from "react";
import useFilteredWeatherData from "../../../Hook/main/today";

interface WeatherData {
  id: number;
  temp: number;
  hum: number;
  speed: number;
  dir: string;
  dust: number;
  co2: number;
  time: string;
  device_id: number;
  create_date: string;
}

interface ViewTodayProps {
  weatherData: WeatherData[];
}

const ViewToday: React.FC<ViewTodayProps> = ({ weatherData }) => {
  const { filteredData, showDir } = useFilteredWeatherData(weatherData);

  const item = filteredData[0];

  return (
    <div className=" ">
      {item ? (
        <ul className="">
          <li key={item.id}>
            <h3 className="text-xs  x:text-base sm:text-xl md:text-xl pr-1 pt-2  flex justify-end   mb-9 font-bold md:pr-3 tracking-tight dark:text-zinc-200 dark:font-extrabold text-zinc-800">
              شاخص های هوا
            </h3>
            <div className="flex flex-col sm:flex-row justify-between px-3  ">
              <div className="flex flex-col items-center font-yekan mb-7 ">
                <span className="text-xs  x:text-base   md:text-lg   text-zinc-800 dark:text-white font-iranBlack tracking-wide ">
                  دما واقعی
                </span>
                <span className="text-base  x:text-lg text-zinc-700  dark:text-neutral-200  font-yekan">
                  {item.temp.toFixed(2)}°
                </span>
              </div>
              <div className="flex flex-col items-center font-yekan mb-7  ">
                <span className="text-xs  x:text-base md:text-lg text-zinc-800 dark:text-white  font-iranBlack tracking-wide">
                  سرعت باد
                </span>
                <span className="text-xs  x:text-lg text-zinc-700  dark:text-neutral-200  font-yekan">
                  {(item.speed / 3.6).toFixed(2)} m/s
                </span>
              </div>
              <div className="flex flex-col items-center font-yekan mb-7 ">
                <span className="text-xs  x:text-base md:text-lg text-zinc-800 dark:text-white  font-iranBlack tracking-wide">
                  جهت باد
                </span>
                <span className="text-xs  x:text-lg text-zinc-700  dark:text-neutral-200  font-yekan ">
                  {showDir(item.dir)}
                </span>
              </div>
              <div className="flex flex-col items-center font-yekan ">
                <span className="text-zinc-800 dark:text-white text-[10px] p-0 m-0  x:text-base md:text-lg text-wrap font-iranBlack tracking-wide">
                  میزان گرد و غبار
                </span>
                <span className="text-zinc-700 dark:text-neutral-200  text-base  x:text-lg font-yekan">
                  {item.dust.toFixed(3)}
                </span>
              </div>
            </div>
          </li>
        </ul>
      ) : (
        <p className="flex justify-center">اطلاعات در دسترس نیست</p>
      )}
    </div>
  );
};

export default ViewToday;
