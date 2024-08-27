import React, { useContext } from "react";
import useLast30Days from "../hook/30dayes/showdate";
import { DataContext } from "../hook/Axsios/DataProviderProps";
import useWeatherData from "../hook/sevenDay/seven";

interface WeatherData {
  id: number;
  temp: number; // دما
  hum: number; // رطوبت
  speed: number; // سرعت باد
  dir: string; // جهت باد
  dust: number; // گرد و غبار
  co2: number; // CO2
  time: string; // زمان
  device_id: number;
  create_date: string;
}

const DateDisplay: React.FC = () => {
  // const dates = useLast30Days(); // دریافت تاریخ‌های 30 روز گذشته
  const weatherData = useContext(DataContext); // دریافت داده‌های هواشناسی از context
  const daysData: { date: string; minTemp: number; maxTemp: number }[] = [];

  // برای هر روز در 30 روز گذشته
  for (let i = 0; i < 30; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    // console.log(weatherData);

    const formattedDate = date.toISOString().split("T")[0];

    const { minTemp, maxTemp } = useWeatherData(formattedDate, weatherData);

    // بررسی اگر مقادیر minTemp و maxTemp معتبر باشند
    if (
      typeof minTemp === "number" &&
      typeof maxTemp === "number" &&
      isFinite(minTemp) &&
      isFinite(maxTemp)
    ) {
      daysData.push({
        date: date.toLocaleDateString("fa-IR"), // تاریخ به فرمت فارسی
        maxTemp,
        minTemp,
      });
    }
  }

  return (
    <div>
      <h2>کمترین و بیشترین دمای ۳۰ روز گذشته</h2>
      {daysData.length > 0 ? (
        <ul>
          {daysData.map((day, index) => (
            <li key={index}>
              <div>تاریخ: {day.date}</div>
              <div>بیشترین دما: {day.maxTemp} °C</div>
              <div>کمترین دما: {day.minTemp} °C</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>هیچ داده‌ای برای نمایش وجود ندارد.</p>
      )}
    </div>
  );
};

export default DateDisplay;
