import React from 'react';
import jalaali from 'jalaali-js';

const DateDisplay: React.FC = () => {
  // تابع برای تبدیل تاریخ میلادی به شمسی
  const toJalaaliDate = (date: Date) => {
    const jalaaliDate = jalaali.toJalaali(date);
    return `${jalaaliDate.jy}/${jalaaliDate.jm}/${jalaaliDate.jd}`;
  };

  // دریافت تاریخ فعلی
  const currentDate = new Date();

  // ایجاد آرایه‌ای برای ذخیره تاریخ‌ها
  const dates: string[] = [];

  // پر کردن آرایه با تاریخ‌های روزانه از یک روز قبل تا 30 روز پیش
  for (let i = 0; i < 30; i++) {
    const date = new Date();
    date.setDate(currentDate.getDate() - (i + 1));
    dates.push(toJalaaliDate(date));
  }

  // نمایش لیست تاریخ‌ها
  return (
    <div>
      <h2>تاریخ‌های 30 روز گذشته (شمسی)</h2>
      <ul>
        {dates.map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ul>
    </div>
  );
};

export default DateDisplay;
