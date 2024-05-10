import React, { useContext, useState, useEffect, useRef } from "react";
import { DataContext } from "../Axsios/DataProviderProps";

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

const WeatherDisplay: React.FC = () => {
  const data = useContext(DataContext);
  const [timeBlocks, setTimeBlocks] = useState<TimeBlock[]>([]);
  const previousTimeRef = useRef(new Date());


  useEffect(() => {
    createTimeBlocks(data); // اولین بار اجرای تابع برای تنظیم بازه‌ها

    const checkTimeChange = () => {
      const currentTime = new Date();
      if (
        currentTime.getHours() !== previousTimeRef.current.getHours() ||
        currentTime.getMinutes() !== previousTimeRef.current.getMinutes()
      ) {
        createTimeBlocks(data);
        previousTimeRef.current = currentTime;
      }

      setTimeout(checkTimeChange, 1000); // چک کردن هر 1 ثانیه
    };

    checkTimeChange(); // شروع اولین چک

    return () => clearTimeout(checkTimeChange as unknown as number); // پاک‌سازی در زمان unmount
  }, [data]);


  // آرایه‌های یکتا برای ذخیره روزها و ماه‌ها
let DatasArryDays: string[] = [];
let DatasArryMonth: string[] = [];

// تابعی برای بیرون آوردن روز از time
const extractDay = (time: string): string[] => {
  const datePart = time.split("T")[0];
  const Days = datePart.split("-")[2];

  if (!DatasArryDays.includes(Days)) {
    DatasArryDays.push(Days);
    // console.log(DatasArryDays); // خروجی تست
  }
  return DatasArryDays;
};

// تابعی برای بیرون آوردن ماه از time
const extractMonths = (time: string): string[] => {
  const datePart = time.split("T")[0];
  const Month = datePart.split("-")[1];

  if (!DatasArryMonth.includes(Month)) {
    DatasArryMonth.push(Month);
    // console.log(DatasArryMonth); // خروجی تست
  }
  return DatasArryMonth;
};

// دریافت روز فعلی
const getCurrentDay = () => {
  const nowDate = new Date();
  let Days = String(nowDate.getDate());
  if (Days.length <= 1) {
    Days = "0" + Days;
  }
  return Days;
};
const currentDay = getCurrentDay();

// دریافت ماه فعلی
const getCurrentMonth = () => {
  const nowDate = new Date();
  let Month = String(nowDate.getMonth() + 1);
  if (Month.length <= 1) {
    Month = "0" + Month;
  }
  return Month;
};
const currentMonth = getCurrentMonth();




// استخراج روزها و ماه‌ها از دیتای ورودی
data.forEach((item) => {
  extractDay(item.time);
  extractMonths(item.time);
});

const filteredData = data.filter((item) => {
  // استخراج روز و ماه از هر آیتم
  const datePart = item.time.split("T")[0];
  const [year, month, day] = datePart.split("-");


  // بررسی اینکه آیا روز و ماه آیتم مطابق با روز و ماه فعلی سیستم هستند
  const dateMatch = month === currentMonth;
  const dateDays = day === currentDay;

  return dateDays && dateMatch;
});

console.log( "j",filteredData); // نمایش داده‌های فیلتر شده





  const createTimeBlocks = (data: WeatherData[]) => {
    const currentTime = new Date();
    currentTime.setMinutes(0, 0, 0);

    const blocks: TimeBlock[] = [];
    const threeHoursInMillis = 3 * 60 * 60 * 1000;

    for (let i = 0; i < 8; i++) {
      const start = new Date(currentTime.getTime() + i * threeHoursInMillis);
      const end = new Date(start.getTime() + threeHoursInMillis);

      const blockData = data.filter((item) => {
        const itemTime = new Date(item.time);
        return itemTime >= start && itemTime < end;
      });

      blocks.push({
        startTime: start.toISOString(),
        endTime: end.toISOString(),
        data: blockData,
      });
    }

    setTimeBlocks(blocks);
  };

  const formatTime = (time: string) => {
    const date = new Date(time);
    return `${date.getHours()}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };
  // let i=0;

  return (
    <div>
      <h1>Weather Data Grouped by Dynamic 3-Hour Blocks</h1>
      {timeBlocks.map((block, index) => {
        // استخراج آرایه‌ای از دماهای موجود در بلاک
        const temperatures = block.data.map((item) => item.temp);
        // پیدا کردن کمترین و بیشترین دما
        const minTemp = Math.min(...temperatures);
        const maxTemp = Math.max(...temperatures);
        // console.log(timeBlocks);

        return (
          <div key={index}>
            <h2>{`From: ${formatTime(block.startTime)} To: ${formatTime(
              block.endTime
            )}`}</h2>
            <p>{`Min Temperature: ${minTemp.toFixed(2)}°C`}</p>
            <p>{`Max Temperature: ${maxTemp.toFixed(2)}°C`}</p>
            <ul>
              {block.data.map((item, i) => (
                <li key={item.id}>
                  <p>{`id: ${i}`}</p>
                  <p>{`Time: ${formatTime(item.time)}`}</p>
                  <p>{`Temperature: ${item.temp.toFixed(2)}°C`}</p>
                  <br /> <hr />
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherDisplay;
