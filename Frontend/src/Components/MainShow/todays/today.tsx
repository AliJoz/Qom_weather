import React from "react";
import useFilteredWeatherData from "../../../hook/main/today";

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
    <div className=" " >
      {item ? (
        <ul className="">
          <li key={item.id}>
            <h3 className="flex justify-end text-lg sm:text-xl mb-4 font-bold pr-3 tracking-tight text-zinc-800">
              شاخص های هوا
            </h3>
            <div className="flex flex-col sm:flex-row justify-between px-10">
              <div className="flex flex-col items-center font-yekan mb-4 sm:mb-0">
                <span className="text-zinc-800 text-base font-iran-Dem">دما واقعی</span>
                <span className="text-lg text-zinc-700  font-yekan">{item.temp.toFixed(2)}°</span>
              </div>
              <div className="flex flex-col items-center font-yekan mb-4 sm:mb-0">
                <span className="text-zinc-800 text-base font-iran-Dem">سرعت باد</span>
                <span className="text-lg text-zinc-700  font-yekan">{(item.speed / 3.6).toFixed(2)} m/s</span>
              </div>
              <div className="flex flex-col items-center font-yekan mb-4 sm:mb-0">
                <span className="text-zinc-800 text-base font-iran-Dem">جهت باد</span>
                <span className="text-lg text-zinc-700  font-yekan">{showDir(item.dir)}</span>
              </div>
              <div className="flex flex-col items-center font-yekan">
                <span className="text-zinc-800 text-base font-iran-Dem">میزان گرد و غبار</span>
                <span className="text-zinc-700 text-lg font-yekan">{item.dust.toFixed(3)}</span>
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
