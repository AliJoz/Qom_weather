import { useContext } from "react";

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

const useFilteredWeatherData = (weatherData: WeatherData[]) => {
  // تابعی برای استخراج ساعت از time
  const extractHour = (time: string): string => {
    const timePart = time.split("T")[1]; // استخراج بخش زمان از تاریخ و زمان
    const hour = timePart.split(":")[0]; // استخراج ساعت
    return hour;
  };

  // فیلتر کردن داده‌ها برای امروز و ساعت جاری
  const filteredData = weatherData.filter((item) => {
    const datePart = item.time.split("T")[0];
    const [year, month, day] = datePart.split("-");

    // استخراج تاریخ جاری
    const nowDate = new Date();
    const currentDay = String(nowDate.getDate()).padStart(2, "0");
    const currentMonth = String(nowDate.getMonth() + 1).padStart(2, "0");
    const currentHour = String(nowDate.getHours()).padStart(2, "0");

    // فیلتر کردن بر اساس روز و ماه جاری
    const dateMatch = month === currentMonth && day === currentDay;

    // فیلتر کردن بر اساس ساعت جاری
    const hourMatch = extractHour(item.time) === currentHour;

    return dateMatch && hourMatch;
  });

  // تابعی برای نمایش جهت باد
  const showDir = (DataDir: string): string => {
    const trimmedDir = DataDir.trim(); // حذف فضاهای اضافی از ابتدا و انتهای رشته
  
    if (trimmedDir === "N") {
      return "شمال";
    } else if (trimmedDir === "NE") {
      return "شمال شرقی";
    } else if (trimmedDir === "S") {
      return "جنوب";
    } else if (trimmedDir === "SE") {
      return "جنوب شرقی";
    } else if (trimmedDir === "NW") {
      return "شمال غربی";
    } else if (trimmedDir === "SW") {
      return "جنوب غربی";
    } else if (trimmedDir === "W") {
      return "غرب";
    } else if (trimmedDir === "E") {
      return "شرق";
    } else {
      console.log("Unknown DataDir:", DataDir);
      return "نامشخص";
    }
  };

  return { filteredData, showDir };
};

export default useFilteredWeatherData;
