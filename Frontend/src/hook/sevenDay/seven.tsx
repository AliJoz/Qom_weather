import { useContext } from 'react';
import { DataContext } from '../../Axsios/DataProviderProps'; // فرض می‌کنم شما از اینجا Context خود را ایمپورت کرده‌اید
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
  interface WeatherStats {
    minTemp: number;
    maxTemp: number;
    filteredData: WeatherData[];
  }
  
  const useWeatherData = (date: string): WeatherStats => {
    const data = useContext(DataContext) as WeatherData[];
  
    // تاریخ ورودی را به فرمت YYYY-MM-DD تبدیل می‌کنیم
    const inputDate = date.split(' ')[0];
  
    // فیلتر کردن داده‌ها بر اساس تطبیق تاریخ
    const filteredData = data.filter(item => {
      const itemDate = item.time.split('T')[0];
      return itemDate === inputDate;
    });
  
    // پیدا کردن کمترین و بیشترین دما
    const minTemp = Math.min(...filteredData.map(item => item.temp));
    const maxTemp = Math.max(...filteredData.map(item => item.temp));
  
    // چاپ داده‌های فیلتر شده و دماها در کنسول برای بررسی
    console.log('Filtered Data:', filteredData);
    console.log('Min Temp:', minTemp);
    console.log('Max Temp:', maxTemp);
  
    return { minTemp, maxTemp, filteredData };
  };
  
  export default useWeatherData;