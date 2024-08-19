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
const ShowIcons = (
  tempMin: number,
  tempMax: number,
  hum: number,
  timeClock: string
): string => {

  const hour = parseInt(timeClock, 10);
  const isDayTime = hour >= 6 && hour < 18; // بررسی روز یا شب بودن

  const avgTemp = (tempMin + tempMax) / 2; // محاسبه دمای میانگین
  let selectedIcon = "/img/404/404.jpg"; // مقدار پیش‌فرض

  if (avgTemp >= 10 && avgTemp <= 20) {
    // دمای میانگین بین 10 تا 20 درجه
    if (hum >= 0 && hum <= 15) {
      selectedIcon = isDayTime ? "/icons/day.svg" : "/icons/night.svg"; // آفتابی یا شب
    } else if (hum > 15 && hum <= 30) {
      selectedIcon = isDayTime ? "/icons/cloudyday.svg" : "/icons/cloudynight.svg"; // ابری روز یا ابری شب
    } else if (hum > 30) {
      selectedIcon = isDayTime ? "/icons/rainy.svg" : "/icons/thunder.svg"; // بارانی روز یا تگرگ شب
    }
  } else if (avgTemp > 20 && avgTemp <= 30) {
    // دمای میانگین بین 20 تا 30 درجه
    if (hum >= 0 && hum <= 15) {
      selectedIcon = isDayTime ? "/icons/cloudyday.svg" : "/icons/cloudynight.svg"; // ابری روز یا ابری شب
    } else if (hum > 15 && hum <= 30) {
      selectedIcon = isDayTime ? "/icons/cloudyday.svg" : "/icons/cloudynight.svg"; // ابری روز یا ابری شب
    } else if (hum > 30) {
      selectedIcon = isDayTime ? "/icons/rainy.svg" : "/icons/thunder.svg"; // بارانی روز یا تگرگ شب
    }
  } else if (avgTemp > 30 && avgTemp <= 40) {
    // دمای میانگین بین 30 تا 40 درجه
    if (hum >= 0 && hum <= 20) {
      selectedIcon = isDayTime ? "/icons/cloudyday.svg" : "/icons/night.svg"; // ابری آفتابی روز یا شب
    } else if (hum > 20) {
      selectedIcon = isDayTime ? "/icons/rainy.svg" : "/icons/thunder.svg"; // آفتابی بارانی روز یا تگرگ شب
    }
  } else if (avgTemp > 40) {
    // دمای میانگین بالای 40 درجه
    selectedIcon = isDayTime ? "/icons/day.svg" : "/icons/night.svg"; // آفتابی روز یا شب
  }

  return selectedIcon;
};

///////

const ViewWeather: React.FC<ViewWeatherProps> = ({ data }) => {
  if (!data.data || data.data.length === 0) {
    return <div className="hidden">اطلاعات دردیتا بیس نیست  </div>;      
  }

  const temperatures = data.data.map((item) => item.temp).filter(temp => temp !== undefined && temp !== null);

  if (temperatures.length === 0) {
    return <div>اطلاعات در دسترس نیست</div>;
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
    return <div>اطلاعات در دسترس نیست</div>; // اگر هیچ رطوبت معتبری وجود ندارد
  }

  const icon = ShowIcons(
    minTemp,
    maxTemp,
    humidity,
    Slicehours(formatTime(data.startTime))
  );

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
