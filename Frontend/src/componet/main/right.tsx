import React from "react";
import Today from './todays/today';
// import MultyWeather from './six_times/dataMulty'; 
// import ViewWeather from './six_times/viewMulty'; 

// Define the TimeBlock type
interface TimeBlock {
  time: string;
  temperature: number;
  temp: string; // Adjust the type as needed
}

// Update MultyWeather to return TimeBlock[]
const MultyWeather = (): TimeBlock[] => {
  return [
    { time: "12:00", temperature: 25, temp: "25°C" },
    { time: "15:00", temperature: 28, temp: "28°C" },
    // Add more objects as necessary
  ];
};

// Ensure ViewWeather expects the correct type
interface ViewWeatherProps {
  data: TimeBlock;
}

const ViewWeather: React.FC<ViewWeatherProps> = ({ data }) => {
  return (
    <div>
      <p>{data.time}</p>
      <p>{data.temperature}</p>
      <p>{data.temp}</p>
    </div>
  );
};

// Your Right component remains largely the same
const Right: React.FC = () => {
  const weatherDataArray = MultyWeather();

  return (
    <div className="flex flex-col space-y-4">
      <div className="bg-gray-700 p-4 rounded-lg w-full sm:w-[400px] md:w-[550px] lg:w-[700px] mr-4">
        <h3 className="flex justify-end text-lg sm:text-xl mb-4 font-bold tracking-wide">
          امروز
        </h3>
        <div className="flex justify-between">
          {weatherDataArray.map((weatherData, index) => (
            <ViewWeather key={index} data={weatherData} />
          ))}
        </div>
      </div>
      <div className="bg-gray-700 p-4 lg:p-1 rounded-lg w-full sm:w-[500px] md:w-[600px] lg:w-[700px]">
        <Today />
      </div>
    </div>
  );
};

export default Right;
