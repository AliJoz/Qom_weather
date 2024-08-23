import React from "react";
import useFilteredWeatherData from '../../../hook/main/today'; // Make sure this path is correct
import ShowIcons from "../../../hook/Showicons/Showicons"; 


const ViewToday = () => {
    const { filteredData, showDir } = useFilteredWeatherData();
//   console.log(filteredData, showDir);

  // اطمینان از اینکه filteredData وجود دارد و شامل حداقل یک آیتم است
  const item = filteredData && filteredData.length > 0 ? filteredData[0] : null;

  if (!item) {
    // اگر داده‌ای وجود نداشت، یک div خالی برگردانید یا return null برای رندر نشدن هیچ چیزی
    return <div></div>; // یا return null;
  }
// console.log(item);
const formatTime = (time: string) => {
    const date = new Date(time);
    return `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`;
  };
const Slicehours = (times: string) => {
    return times.split(":")[0];
  };
  
 

  const icon = ShowIcons({
    tempMin:item.temp,
    tempMax:item.temp,
    hum: item.hum,
    timeClock:Slicehours(formatTime(item.time))
  });

    return (
        <div className="flex flex-col justify-center pl-9 relative">
            <div className="flex justify-between">
                <div className="relative flex">
                    <h2 className="text-6xl font-bold pb-2 absolute -left-10 -top-12">قم</h2>
                    <p className="text-sm font-iran-Dem mt-8  ">
                        میزان رطوبت: {item ? `%${item.hum.toFixed(2)}` : '0%'}
                    </p>
                </div>
                <div>
                    <img
                        src={icon}// Path should be relative to the public folder
                        alt="Weather Icon"
                        className="w-44 h-40 mr-20"
                    />
                </div>
            </div>

            <div className="absolute top-24">
                <div className="flex items-center">
                    <span className="text-5xl font-bold">
                        {item ? `${item.temp.toFixed(2)}°` : '0°'}
                    </span>
                </div>
            </div>
        </div>
    );

};

export default ViewToday;
