import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer,
} from 'recharts';

// داده‌های نمونه
const data = [
  { name: '1', maxTemp: 40, minTemp: 20, realMaxTemp: 35, realMinTemp: 18 },
  { name: '2', maxTemp: 42, minTemp: 22, realMaxTemp: 37, realMinTemp: 19 },
  { name: '3', maxTemp: 41, minTemp: 23, realMaxTemp: 38, realMinTemp: 20 },
  { name: '4', maxTemp: 39, minTemp: 24, realMaxTemp: 36, realMinTemp: 21 },
  { name: '5', maxTemp: 43, minTemp: 21, realMaxTemp: 39, realMinTemp: 19 },
  { name: '6', maxTemp: 44, minTemp: 22, realMaxTemp: 40, realMinTemp: 18 },
  { name: '7', maxTemp: 45, minTemp: 25, realMaxTemp: 42, realMinTemp: 21 },
  { name: '8', maxTemp: 46, minTemp: 23, realMaxTemp: 43, realMinTemp: 20 },
  { name: '9', maxTemp: 42, minTemp: 20, realMaxTemp: 38, realMinTemp: 18 },
  { name: '10', maxTemp: 44, minTemp: 24, realMaxTemp: 41, realMinTemp: 22 },
  { name: '11', maxTemp: 47, minTemp: 26, realMaxTemp: 44, realMinTemp: 23 },
  { name: '12', maxTemp: 48, minTemp: 25, realMaxTemp: 45, realMinTemp: 22 },
  { name: '13', maxTemp: 46, minTemp: 24, realMaxTemp: 43, realMinTemp: 21 },
  { name: '14', maxTemp: 45, minTemp: 23, realMaxTemp: 42, realMinTemp: 20 },
  { name: '15', maxTemp: 44, minTemp: 22, realMaxTemp: 41, realMinTemp: 19 },
  { name: '16', maxTemp: 43, minTemp: 21, realMaxTemp: 40, realMinTemp: 18 },
  { name: '17', maxTemp: 42, minTemp: 20, realMaxTemp: 39, realMinTemp: 17 },
  { name: '18', maxTemp: 41, minTemp: 19, realMaxTemp: 38, realMinTemp: 16 },
  { name: '19', maxTemp: 40, minTemp: 18, realMaxTemp: 37, realMinTemp: 15 },
  { name: '20', maxTemp: 39, minTemp: 17, realMaxTemp: 36, realMinTemp: 14 },
];

// کامپوننت اصلی نمودار دما
const TemperatureChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="maxTemp" fill="#FFA726" name="حداکثر پیش‌بینی" />
        <Bar dataKey="minTemp" fill="#29B6F6" name="حداقل پیش‌بینی" />
        <Line type="monotone" dataKey="realMaxTemp" stroke="#EF5350" strokeWidth={2} name="حداکثر واقعی" />
        <Line type="monotone" dataKey="realMinTemp" stroke="#42A5F5" strokeWidth={2} name="حداقل واقعی" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TemperatureChart;
