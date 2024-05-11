import React from 'react';
import useWeatherData from '../../Hook/sevenDay/seven';
import ShowIcons from '../../Hook/Showicons/Showiconday';

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

interface RightProps {
  weatherData: WeatherData[];
}

const Right: React.FC<RightProps> = ({ weatherData }) => {
  const getLast7DaysWithWeather = () => {
    const daysOfWeek = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'];
    const daysData = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);

      const dayIndex = date.getDay();
      let dayName = daysOfWeek[dayIndex];

      if (i === 0) {
        dayName = 'امروز';
      } else if (i === 1) {
        dayName = 'دیروز';
      }

      const formattedDate = date.toISOString().split('T')[0];
      const { minTemp, maxTemp } = useWeatherData(formattedDate, weatherData);

      // Check if minTemp and maxTemp are valid numbers
      if (
        typeof minTemp === 'number' &&
        typeof maxTemp === 'number' &&
        isFinite(minTemp) &&
        isFinite(maxTemp)
      ) {
        daysData.push({
          day: dayName,
          date: date.toLocaleDateString('fa-IR'),
          maxTemp,
          minTemp,
          icon: ShowIcons({ tempMin: minTemp, tempMax: maxTemp }),
        });
      }
    }

    return daysData;
  };

  const daysData = getLast7DaysWithWeather();

  if (daysData.length === 0) {
    return <div className=" dark:bg-gray-700 p-4 rounded-lg w-full sm:w-[100px] md:w-[200px] lg:w-[300px]"></div>;
  }

  return (
    <div className="bg-neutral-200 border-slate-500 border-2   p-4 rounded-lg w-full sm:w-[100px] md:w-[200px] lg:w-[300px]">
      <h3 className="text-lg sm:text-xl mb-4 font-bold text-end text-zinc-700">هفته اخیر</h3>
      <div className="space-y-2">
        {daysData.map((day, index) => (
          <div key={index} className="flex justify-between text-zinc-800">
            <span className="flex items-center font-iranBlack">
              <img
                src={day.icon}
                alt={day.day}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ml-2"
              />
              <div className="flex">
                <span className="text-red-600">{day.maxTemp.toFixed(2)}°</span>
                <span className="mx-1">/</span>
                <span className="text-blue-500">{day.minTemp.toFixed(2)}°</span>
              </div>
            </span>
            <span className="font-yekan">{day.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Right;
