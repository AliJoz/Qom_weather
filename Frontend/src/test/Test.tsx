import React from 'react';
import useWeatherData from './TT'; // فرض بر این است که useWeatherData در فایل TT قرار دارد

const DateDisplay: React.FC = () => {
  // تابع برای فرمت تاریخ به صورت YYYY-MM-DD
  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  // دریافت تاریخ فعلی
  const currentDate = new Date();

  // ایجاد آرایه‌ای برای ذخیره تاریخ‌ها
  const dates: string[] = [];

  // پر کردن آرایه با تاریخ‌های روزانه از تاریخ فعلی تا 7 روز پیش
  for (let i = 0; i <= 7; i++) {
    const date = new Date();
    date.setDate(currentDate.getDate() - i);
    dates.push(formatDate(date));
  }

  return (
    <div>
      <h2>Weather Data for the Last 7 Days</h2>
      {dates.map((date, index) => {
        const { minTemp, maxTemp, filteredData } = useWeatherData(date);
        
        return (
          <div key={index}>
            <h3>Date: {date}</h3>
            <p><strong>Minimum Temperature:</strong> {minTemp}°C</p>
            <p><strong>Maximum Temperature:</strong> {maxTemp}°C</p>
            
            <h4>Detailed Data:</h4>
            <hr /><br />
          </div>
        );
      })}
    </div>
  );
};

export default DateDisplay;
