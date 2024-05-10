
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

const useWeatherData = (date: string, data: WeatherData[]): WeatherStats => {
  // تاریخ ورودی را به فرمت YYYY-MM-DD تبدیل می‌کنیم
  const inputDate = date.split(' ')[0];

  // فیلتر کردن داده‌ها بر اساس تطبیق تاریخ
  const filteredData = data.filter(item => {
    const itemDate = item.time.split('T')[0];
    return itemDate === inputDate;
  });
  console.log(filteredData)

  // پیدا کردن کمترین و بیشترین دما
  const minTemp = Math.min(...filteredData.map(item => item.temp));
  const maxTemp = Math.max(...filteredData.map(item => item.temp));

  return { minTemp, maxTemp, filteredData };
};

export default useWeatherData;