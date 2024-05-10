import React, { useContext } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer,
} from 'recharts';
import { DataContext } from '../../Axsios/DataProviderProps';
import useWeatherData from '../../hook/sevenDay/seven';

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

const TemperatureChart: React.FC = () => {
  const weatherData = useContext(DataContext);
  const daysData: { date: string; minTemp: number; maxTemp: number }[] = [];

  for (let i = 0; i < 30; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);

    const formattedDate = date.toISOString().split('T')[0];
    const { minTemp, maxTemp } = useWeatherData(formattedDate, weatherData);

    if (
      typeof minTemp === 'number' &&
      typeof maxTemp === 'number' &&
      isFinite(minTemp) &&
      isFinite(maxTemp)
    ) {
      daysData.push({
        date: date.toLocaleDateString('fa-IR'),
        maxTemp,
        minTemp,
      });
    }
  }

  return (
    <div className='bg-zinc-800 h-screen w-[95%]'>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={daysData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="maxTemp" fill="#FFA726" name="حداکثر دما" />
          <Bar dataKey="minTemp" fill="#29B6F6" name="حداقل دما" />
          <Line type="monotone" dataKey="maxTemp" stroke="#EF5350" strokeWidth={2} name="حداکثر دمای واقعی" />
          <Line type="monotone" dataKey="minTemp" stroke="#42A5F5" strokeWidth={2} name="حداقل دمای واقعی" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TemperatureChart;
