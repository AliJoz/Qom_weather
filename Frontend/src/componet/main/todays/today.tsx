import React, { useContext } from "react";
import { DataContext } from "../../../Axsios/DataProviderProps";

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

const Today: React.FC = () => {
  const data = useContext(DataContext);

  // تابعی برای استخراج ساعت از time
  const extractHour = (time: string): string => {
    const timePart = time.split("T")[1]; // استخراج بخش زمان از تاریخ و زمان
    const hour = timePart.split(":")[0]; // استخراج ساعت
    return hour;
  };

  // فیلتر کردن داده‌ها برای امروز و ساعت 4
  const filteredData = data.filter((item) => {
    const datePart = item.time.split("T")[0];
    const [year, month, day] = datePart.split("-");

    // استخراج تاریخ جاری
    const nowDate = new Date();
    const currentDay = String(nowDate.getDate()).padStart(2, "0");
    const currentMonth = String(nowDate.getMonth() + 1).padStart(2, "0");

    // فیلتر کردن بر اساس روز و ماه جاری
    const dateMatch = month === currentMonth && day === currentDay;
const Hu=String(nowDate.getHours());
    // فیلتر کردن بر اساس ساعت 4
    const hourMatch = extractHour(item.time) === Hu;

    return dateMatch && hourMatch;
  });

  console.log("Filtered Data:", filteredData);

  // JSX برای رندر کردن داده‌های فیلتر شده
  return (
    <div>
      {filteredData.length > 0 ? (
        <ul>
          {filteredData.map((item, index) => {
            if (index === 0) {
              return (
                <li key={item.id}>
                  <h3 className="flex justify-end text-lg sm:text-xl mb-4 font-bold">
                    شاخص های هوا
                  </h3>
                  <div className="flex flex-col sm:flex-row justify-between">
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
                      <span className="text-lg">{item.dir}</span>
                    </div>
                    <div className="flex flex-col items-center font-yekan">
                      <span className="text-sm">میزان گرد وغبار   </span>
                      <span className="text-lg">{item.dust.toFixed(3)}</span>
                    </div>
                  </div>
                </li>
              );
            }
            return null; // از بقیه آیتم‌ها صرف‌نظر کنید
          })}
        </ul>
      ) : (
        <p className="flex justify-center">اطلاعات در دسترس نیست</p>
      )}
    </div>
  );
};

export default Today;
