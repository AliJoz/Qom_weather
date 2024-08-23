import React from 'react';
import useWeatherData from '../../hook/sevenDay/seven';
import ShowIcons from '../../hook/Showicons/Showiconday';
const Left: React.FC = () => {
  const getLast7DaysWithWeather = () => {
    const daysOfWeek = [
      'یکشنبه',
      'دوشنبه',
      'سه‌شنبه',
      'چهارشنبه',
      'پنج‌شنبه',
      'جمعه',
      'شنبه'
    ];

    const daysData = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);

      const dayIndex = date.getDay();
      let dayName = daysOfWeek[dayIndex];

      // افزودن امروز و دیروز
      if (i === 0) {
        dayName = 'امروز';
      } else if (i === 1) {
        dayName = 'دیروز';
      }

      // دریافت داده‌های دما از هوک useWeatherData
      const formattedDate = date.toISOString().split('T')[0]; // تاریخ به فرمت YYYY-MM-DD
      const { minTemp, maxTemp } = useWeatherData(formattedDate);

      daysData.push({
        day: dayName,
        date: date.toLocaleDateString('fa-IR'),
        maxTemp: maxTemp, // دمای واقعی
        minTemp: minTemp, // دمای واقعی
        icon: ShowIcons({ tempMin: minTemp, tempMax: maxTemp })
      });
    }

    return daysData;
  };

  const daysData = getLast7DaysWithWeather();

  // 
  const hasInvalidTemp = daysData.some(
    (day) => !isFinite(day.maxTemp) || !isFinite(day.minTemp)
  );

  return hasInvalidTemp ? (
    <div className="bg-gray-700 p-4 rounded-lg w-full sm:w-[100px] md:w-[200px] lg:w-[300px]">
      <h3 className="text-lg sm:text-xl mb-4 font-bold">اطلاعات موجود نیست</h3>
    </div>
  ) : (
    <div className="bg-gray-700 p-4 rounded-lg w-full sm:w-[100px] md:w-[200px] lg:w-[300px]">
      <h3 className="text-lg sm:text-xl mb-4 font-bold text-end">هفته اخیر  </h3>
      <div className="space-y-2">
        {daysData.map((day, index) => (
          <div key={index} className="flex justify-between">
            <span className="flex items-center font-iranBlack">
              <img
                src={day.icon}
                alt={day.day}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ml-2"
              />
              <div className="flex">
                <span className="text-red-500">
                  {day.maxTemp.toFixed(2)}°
                </span>
                <span className="mx-1">/</span>
                <span className="text-blue-500">
                  {day.minTemp.toFixed(2)}°
                </span>
              </div>
            </span>
            <span className="font-yekan">{day.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Left;
