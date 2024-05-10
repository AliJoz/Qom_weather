import { useState, useEffect } from 'react';

// کاستوم هوک برای برگرداندن تاریخ‌های 30 روز گذشته
const useLast30Days = (): string[] => {
  const [dates, setDates] = useState<string[]>([]);

  // تابعی برای فرمت‌دهی تاریخ به صورت YYYY-MM-DD
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // اضافه کردن صفر در صورت نیاز
    const day = String(date.getDate()).padStart(2, '0'); // اضافه کردن صفر در صورت نیاز
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const currentDate = new Date();
    const datesArray: string[] = [];

    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(currentDate.getDate() - (i + 1));
      datesArray.push(formatDate(date));
    }

    setDates(datesArray);
  }, []);

  return dates;
};

export default useLast30Days;
