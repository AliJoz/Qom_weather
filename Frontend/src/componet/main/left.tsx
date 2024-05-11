import React from 'react';

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

      
      if (i === 0) {
        dayName = 'امروز';
      } else if (i === 1) {
        dayName = 'دیروز';
      }

     
      daysData.push({
        day: dayName,
        date: date.toLocaleDateString('fa-IR'),
        maxTemp: Math.floor(Math.random() * 15 + 20), 
        minTemp: Math.floor(Math.random() * 10 + 10),   
        icon: 'snowy-1.svg' 
      });
    }

    return daysData;
  };

  const daysData = getLast7DaysWithWeather();

  return (
    <div className="bg-gray-700 p-4 rounded-lg w-full sm:w-[100px] md:w-[200px] lg:w-[300px]">
      <h3 className="text-lg sm:text-xl mb-4 font-bold">7 روز گذشته</h3>
      <div className="space-y-2">
        {daysData.map((day, index) => (
          <div key={index} className="flex justify-between">
            <span className="flex items-center font-iranBlack">
              <img
                src={`/icons/animated/${day.icon}`}
                alt={day.day}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ml-2"
              />
              {day.maxTemp}°/{day.minTemp}°
            </span>
            <span className="font-yekan">{day.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Left;
