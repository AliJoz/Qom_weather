import React from "react";
import Left from "./main/left";
import Right from "./main/right";
import Show from "./main/Show/Showtoday";

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

interface MainProps {
  weatherData: WeatherData[];
}

const Main: React.FC<MainProps> = ({ weatherData }) => {
  return (
    <>
      <div className="flex flex-col justify-center pl-9 relative ">
        {/* Pass weatherData to the Show component */}
        <Show weatherData={weatherData} />
      </div>
      <div className="flex-1 lg:flex justify-between p-6 bg-gray-800 text-white grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          {/* Pass weatherData to the Left component */}
          <Left weatherData={weatherData} />
        </div>
        <div className="mr-20">
          {/* Pass weatherData to the Right component */}
          <Right weatherData={weatherData} />
        </div>
      </div>
    </>
  );
};

export default Main;
