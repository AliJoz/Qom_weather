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
////// icons
const ShowIcons = (temp: number, hum: number, timeClock: string): string => {
  // تبدیل timeClock به عدد برای مقایسه ساده‌تر
  const hour = parseInt(timeClock, 10);
  
  // بررسی وضعیت زمانی (روز و شب)
  if (hour >= 6 && hour < 17) {
    // day
    
    const ranges = [
      {
        min: -Infinity,
        max: 10,
        action: () => {
          return "/icons/snowy.svg";
        },
      },
      {
        min: 10,
        max: 20,
        action: () => {
          return "/icons/rainy.svg";
        },
      },
      {
        min: 20,
        max: 30,
        action: () => {
          return "/icons/cloudyday.svg";
        },
      },
      {
        min: 30,
        max: 40,
        action: () => {
          return "/icons/day.svg";
        },
      },
      {
        min: 40,
        max: 50,
        action: () => {
          return "/icons/day.svg";
        },
      },
      {
        min: 50,
        max: Infinity,
        action: () => {
          return "/icons/day.svg";
        },
      },
    ];

    for (const range of ranges) {
      if (hum >= range.min && hum < range.max) {
        return range.action();
      } else {
        console.log("d");
      }
    }
  } else if (hour < 6 || hour >= 17) {
    // shab

    const ranges = [
      {
        min: -Infinity,
        max: 10,
        action: () => {
          return "/icons/cloudynight.svg";
        },
      },
      {
        min: 10,
        max: 20,
        action: () => {
          return "/icons/cloudynight.svg";
        },
      },
      {
        min: 20,
        max: 30,
        action: () => {
          return "/icons/cloudynight.svg";
        },
      },
      {
        min: 30,
        max: 40,
        action: () => {
          return "/icons/cloudynight.svg";
        },
      },
      {
        min: 40,
        max: 50,
        action: () => {
          return "/icons/night.svg";
        },
      },
      {
        min: 50,
        max: Infinity,
        action: () => {
          return "/icons/night.svg";
        },
      },
    ];

    for (const range of ranges) {
      if (hum >= range.min && hum < range.max) {
        return range.action();
      }
    }
  } else {
    // برای تست خطا
    alert("error");
  }
  return " logo";
};

///////

const ViewWeather: React.FC<ViewWeatherProps> = ({ data }) => {
  const temperatures = data.data.map((item) => item.temp);

  const minTemp = Math.min(...temperatures);
  const maxTemp = Math.max(...temperatures);

  // const humidity = data.data.find(
  //   (item) => formatTime(item.time) === formatTime(data.startTime)

  // )?.hum;
  const Slicehours = (times: string) => {
    return times.split(":")[0];
  };

  const humidity = data.data.find((item) => {
    const startTimeHour = Slicehours(formatTime(data.startTime));
    const itemTimeHour = Slicehours(formatTime(item.time));
    return itemTimeHour === startTimeHour;
  })?.hum;

  const icon = ShowIcons(
    (maxTemp + minTemp) / 2,
    humidity || 0,
    Slicehours(formatTime(data.startTime))
  );
  console.log(icon);

  return (
    <>
      <div className="flex">
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm font-iranBlack">
            {formatTime(data.startTime)}
          </span>
          <img
            src={icon}
            alt="Weather Icon"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
          />
          <div className="flex items-center space-x-1">
            <span className="sm:text-xs md:text-sm text-base font-iran-Dem text-red-600">
              {maxTemp.toFixed(2)}
            </span>
            <span>/</span>
            <span className="sm:text-xs md:text-sm text-base  font-iran-Dem text-cyan-400">
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
