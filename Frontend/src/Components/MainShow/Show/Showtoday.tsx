import React from "react";
import useFilteredWeatherData from "../../../Hook/main/today"; // Adjust the path if needed
import ShowIcons from "../../../Hook/Showicons/Showicons";

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

interface ViewTodayProps {
  weatherData: WeatherData[];
}

const ViewToday: React.FC<ViewTodayProps> = ({ weatherData }) => {
  // Pass the data to the hook
  const { filteredData, showDir } = useFilteredWeatherData(weatherData);

  // Ensure filteredData exists and contains at least one item
  const item = filteredData && filteredData.length > 0 ? filteredData[0] : null;

  if (!item) {
    // If no data is available, return an empty div or null to render nothing
    return <div></div>; // or return null;
  }

  // Helper function to format time
  const formatTime = (time: string) => {
    const date = new Date(time);
    return `${date.getHours()}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };

  // Extract the hour part from the time string
  const Slicehours = (times: string) => {
    return times.split(":")[0];
  };

  // Get the appropriate weather icon based on the data
  const icon = ShowIcons({
    tempMin: item.temp,
    tempMax: item.temp,
    hum: item.hum,
    timeClock: Slicehours(formatTime(item.time)),
  });

  return (
    <div className="flex flex-col justify-center pl-9 relative">
      <div className="flex justify-between">
        <div className="relative flex">
          <h2 className="text-6xl font-bold  absolute -left-3 -bottom-[0.8rem] dark:text-white text-zinc-700">
            قم
          </h2>
          <p className="text-sm w-44 flex justify-center items-center font-iran-Dem absolute -bottom-8 -left-2 dark:text-zinc-300 text-zinc-950 ">
            میزان رطوبت: {item ? `%${item.hum.toFixed(2)}` : "0%"}
          </p>
        </div>
        <div className="absolute top-28 left-56 md:-top-24 md:left-56 ">
          <img
            src={icon} // Ensure this path is correct and accessible
            alt="Weather Icon"
            className="w-20 h-24 md:w-44 md:h-40 "
          />
        </div>
      </div>

      <div className="absolute top-16 left-0">
        <div className="flex items-center">
          <span className="text-5xl font-bold dark:text-white text-zinc-700">
            {item ? `${item.temp.toFixed(2)}°` : "0°"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ViewToday;
