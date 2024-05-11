import React from "react";
import RightLive from "./RightLive";
import LeftLive from "./LeftLive";
import Show from "./Show/Showtoday";

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
      <div className="flex-1 lg:flex justify-between  p-8 bg-neutral-200 dark:bg-gray-800 text-white grid grid-cols-1 xl:grid-cols-2 gap-5">
       
        <div className="mr-20 space-y-8 mt-30">
          {/* Pass weatherData to the LeftLive component */}
          <LeftLive weatherData={weatherData} />
        </div>

        <div className="">
          {/* Pass weatherData to the Right component */}
          <RightLive weatherData={weatherData} />
        </div>
      </div>
    </>
  );
};

export default Main;
