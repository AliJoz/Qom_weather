import React from 'react';

interface TimeBlock {
  time: string;
  temperature: number;

  temp:number
  // icon: string; // فرض کنید آدرس آیکون هواشناسی است
}

interface ViewWeatherProps {
  data: TimeBlock;
}

const ViewWeather: React.FC<ViewWeatherProps> = ({ data }) => {
  console.log(data);
  return (
    <div className="flex">
      <div className="flex flex-col items-center">
        <span className="text-xs sm:text-sm font-iranBlack">{data.temp}</span>
        {/* <img
          src={data.icon}
          alt="Weather Icon"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
        /> */}
        <span className="text-base sm:text-lg font-iran-Dem">{data.temperature}°</span>
      </div>
      <div className="w-0.5 h-20 bg-slate-600 block ml-3"></div>
    </div>
  );
};

export default ViewWeather;
