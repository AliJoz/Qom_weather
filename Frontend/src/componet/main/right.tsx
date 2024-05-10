import React from "react";
import Today from "./todays/today";
// import dayIcon from "./six_times/day.svg"; // Import the SVG icon
import WeatherDisplay from "./six_times/dataMulty";
import ViewWeather from './six_times/viewMulty'
interface TimeBlock {
  time: string;
  temperature: number;
  temp: string;
  icons: string;
}

// const MultyWeather = (): TimeBlock[] => {
//   return [
//     { time: "12:00", temperature: 25, temp: "25°C", icons: dayIcon },
//     { time: "15:00", temperature: 28, temp: "28°C", icons: dayIcon },
//     { time: "15:00", temperature: 28, temp: "28°C", icons: dayIcon },
//     { time: "15:00", temperature: 28, temp: "28°C", icons: dayIcon },
//     { time: "15:00", temperature: 28, temp: "28°C", icons: dayIcon },
//     { time: "15:00", temperature: 28, temp: "28°C", icons: dayIcon },
//     { time: "15:00", temperature: 28, temp: "28°C", icons: dayIcon },
//     { time: "15:00", temperature: 28, temp: "28°C", icons: dayIcon },
//   ];
// };

interface ViewWeatherProps {
  data: TimeBlock;
}

// const ViewWeather: React.FC<ViewWeatherProps> = ({ data }) => {
//   return (
//     <div className="flex">
//       <div className="flex flex-col items-center">
//         <span className="text-xs sm:text-sm font-iranBlack">6:00 AM</span>
//         <img
//           src="/public/icons/animated/night.svg"
//           alt="Cloudy"
//           className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
//         />
//         <span className="text-base sm:text-lg font-iran-Dem">25°</span>
//       </div>
//       <div className="w-0.5 h-20 bg-slate-600 block ml-3"></div>
//     </div>
//   );
// };

const Right: React.FC = () => {
  const weatherDataArray = WeatherDisplay();

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
