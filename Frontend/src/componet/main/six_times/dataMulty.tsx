import React, { useContext, useState, useEffect, useRef } from "react";
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

interface TimeBlock {
  startTime: string;
  endTime: string;
  data: WeatherData[];
}

const useWeatherData = (): TimeBlock[] => {
  const data = useContext(DataContext);
  const [timeBlocks, setTimeBlocks] = useState<TimeBlock[]>([]);
  const previousTimeRef = useRef(new Date());

  useEffect(() => {
    createTimeBlocks(data); 

    const checkTimeChange = () => {
      const currentTime = new Date();
      if (
        currentTime.getHours() !== previousTimeRef.current.getHours() ||
        currentTime.getMinutes() !== previousTimeRef.current.getMinutes()
      ) {
        createTimeBlocks(data);
        previousTimeRef.current = currentTime;
      }

      setTimeout(checkTimeChange, 1000); 
    };

    checkTimeChange(); 

    return () => clearTimeout(checkTimeChange as unknown as number); // Cleanup on unmount
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


  return [...timeBlocks]; 
};

export default useWeatherData;
