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
console.log(timeBlocks);

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
            <br /> <hr />
            {/* <ul>
              {block.data.map((item, i) => (
                <li key={item.id}>
                  <p>{`id: ${i}`}</p>
                  <p>{`Time: ${formatTime(item.time)}`}</p>
                  <p>{`Temperature: ${item.temp.toFixed(2)}°C`}</p>
                  <br /> <hr />
                </li>
              ))}
            </ul> */}
          </div>
        );
      })}
    </div>
  );
};

export default WeatherDisplay;
