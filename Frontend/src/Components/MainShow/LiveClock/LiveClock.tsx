import React, { useState, useEffect } from 'react';
import jalaali from 'jalaali-js';

const LiveJalaliClock = () => {
  const [time, setTime] = useState(new Date());
  const [jalaliDate, setJalaliDate] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');

  // آرایه روزهای هفته به زبان فارسی
  const daysOfWeek = ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setTime(now);

      // تبدیل تاریخ میلادی به جلالی
      const jDate = jalaali.toJalaali(now.getFullYear(), now.getMonth() + 1, now.getDate());

      // گرفتن روز هفته به صورت فارسی
      const day = daysOfWeek[now.getDay()];

      // تنظیم تاریخ جلالی به فرمت دلخواه: 7 شهریور
      const formattedJalaliDate = `${jDate.jd} ${getMonthName(jDate.jm)}`;

      setDayOfWeek(day);
      setJalaliDate(formattedJalaliDate);
    }, 1000);

    return () => clearInterval(intervalId); // پاک‌سازی تایمر هنگام خروج از کامپوننت
  }, []);

  // تابع برای تبدیل شماره ماه جلالی به اسم ماه فارسی
  const getMonthName = (monthNumber) => {
    const months = [
      'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور',
      'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
    ];
    return months[monthNumber - 1];
  };

  return (
    <div>
      <h1>{`${dayOfWeek} ${jalaliDate}  - ${time.toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit', hour12: false })}`}</h1>
    </div>
  );
};

export default LiveJalaliClock;
