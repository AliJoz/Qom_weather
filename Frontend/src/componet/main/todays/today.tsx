import React from "react";
import useFilteredWeatherData from "../../../hook/main/today"; // مسیر صحیح را بررسی کنید

const ViewToday = () => {
  const { filteredData, showDir } = useFilteredWeatherData();

  // بررسی اینکه آیا داده‌ها در دسترس هستند یا خیر
  const item = filteredData[0];

  return (
    <div>
      {item ? (
        <ul>
          <li key={item.id}>
            <h3 className="flex justify-end text-lg sm:text-xl mb-4 font-bold pr-3">
              شاخص های هوا
            </h3>
            <div className="flex flex-col sm:flex-row justify-between px-10">
              <div className="flex flex-col items-center font-yekan mb-4 sm:mb-0">
                <span className="text-sm">دما واقعی</span>
                <span className="text-lg">{item.temp.toFixed(2)}°</span>
              </div>
              <div className="flex flex-col items-center font-yekan mb-4 sm:mb-0">
                <span className="text-sm">سرعت باد</span>
                <span className="text-lg">{item.speed} km/h</span>
              </div>
              <div className="flex flex-col items-center font-yekan mb-4 sm:mb-0">
                <span className="text-sm">جهت باد</span>
                <span className="text-lg">{showDir(item.dir)}</span>
              </div>
              <div className="flex flex-col items-center font-yekan">
                <span className="text-sm">میزان گرد و غبار</span>
                <span className="text-lg">{item.dust.toFixed(3)}</span>
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
