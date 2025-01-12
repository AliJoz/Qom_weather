import React from "react";
import ShowIcons from "../../../Hook/Showicons/Showicons";
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

////// icons

///////

const ViewWeather: React.FC<ViewWeatherProps> = ({ data }) => {
  if (!data.data || data.data.length === 0) {
    return <div className="hidden">اطلاعات دردیتا بیس نیست  </div>;      
  }

  const temperatures = data.data.map((item) => item.temp).filter(temp => temp !== undefined && temp !== null);

  if (temperatures.length === 0) {
    return <div className="hidden">اطلاعات در دسترس نیست</div>;
  }

  const minTemp = Math.min(...temperatures);
  const maxTemp = Math.max(...temperatures);

  const Slicehours = (times: string) => {
    return times.split(":")[0];
  };

  const humidity = data.data.find((item) => {
    const startTimeHour = Slicehours(formatTime(data.startTime));
    const itemTimeHour = Slicehours(formatTime(item.time));
    return itemTimeHour === startTimeHour;
  })?.hum;

  if (humidity === undefined || humidity === null) {
    return <div className="">اطلاعات در دسترس نیست</div>; // اگر هیچ رطوبت معتبری وجود ندارد
  }
  
  const icon = ShowIcons({
    tempMin: minTemp,
    tempMax: maxTemp,
    hum: humidity,
    timeClock: Slicehours(formatTime(data.startTime))
  });

  return (
    <>
      <div className="flex ">
        <div className="flex flex-col items-center">
          <span className="text-base sm:text-base md:text-lg font-iranBlack text-zinc-800 dark:text-zinc-50 font-black">
            {formatTime(data.startTime)}
          </span>
          <img
            src={icon}
            alt="Weather Icon"
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18"
          />
          <div className="flex items-center justify-center space-x-1">
            <span className="text-base font-iranBold font-bold text-red-600   ">
              {maxTemp.toFixed(2)}
            </span>
            <span className="text-zinc-800 dark:text-zinc-50 text-lg">/</span>
            <span className=" text-base font-bold font-iranBold  text-blue-500 dark:text-blue-400">
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
