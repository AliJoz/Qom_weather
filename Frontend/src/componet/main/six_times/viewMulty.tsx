import React from "react";

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

interface TimeBlock {
  startTime: string;
  endTime: string;
  data: WeatherData[];
}

interface ViewWeatherProps {
  data: TimeBlock;
}

const formatTime = (time: string) => {
  const date = new Date(time);
  return `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`;
};
const ViewWeather: React.FC<ViewWeatherProps> = ({ data }) => {
  // استخراج آرایه‌ای از دماهای موجود در بلاک
  const temperatures = data.data.map((item) => item.temp);
  // پیدا کردن کمترین و بیشترین دما
  const minTemp = Math.min(...temperatures);
  const maxTemp = Math.max(...temperatures);

  return (
    <>
      {/* <h2>{`From: ${formatTime(data.startTime)} To: ${formatTime(data.endTime)}`}</h2> */}
      {/* <p>{`Min Temperature: ${minTemp.toFixed(2)}°C`}</p>
      <p>{`Max Temperature: ${maxTemp.toFixed(2)}°C`}</p> */}
      <br /> <hr />
      <div className="flex">
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm font-iranBlack">
            {formatTime(data.startTime)}
          </span>
          <img
            src="./day.svg"
            alt="Weather Icon"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
          />
          <div className="flex items-center space-x-1">
            <span className="text-base sm:text-lg font-iran-Dem text-red-600">
              {maxTemp.toFixed(2)}
            </span>
            <span>/</span>
            <span className="text-base sm:text-lg font-iran-Dem text-cyan-400">
              {minTemp.toFixed(2)}
            </span>
          </div>
        </div>
        <div className="w-0.5 h-20 bg-slate-600 block ml-3"></div>
      </div>
    </>
  );
};

export default ViewWeather;
