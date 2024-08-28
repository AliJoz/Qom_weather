import React, { useState, useEffect } from 'react';
import jalaali from 'jalaali-js';

const LiveJalaliClock = () => {
  const [time, setTime] = useState(new Date());
  const [jalaliDate, setJalaliDate] = useState('');

  useEffect(() => {
    // هر ثانیه یکبار زمان به‌روز می‌شود
    const intervalId = setInterval(() => {
      const now = new Date();
      setTime(now);

      // تبدیل تاریخ میلادی به جلالی
      const jDate = jalaali.toJalaali(now.getFullYear(), now.getMonth() + 1, now.getDate());
      setJalaliDate(`${jDate.jy}/${jDate.jm}/${jDate.jd}`);
    }, 1000);

    return () => clearInterval(intervalId); // پاک‌سازی تایمر هنگام خروج از کامپوننت
  }, []);

  return (
    <div>
      <h1 > {time.toLocaleTimeString('fa-IR', { hour12: false })}</h1>
      <p> {jalaliDate}</p>
    </div>
  );
};

export default LiveJalaliClock;
