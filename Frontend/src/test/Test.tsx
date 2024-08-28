import React, { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { DataContext } from "../Hook/Axsios/DataProviderProps";
import useWeatherData from "../Hook/sevenDay/seven";
import { useNavigate } from "react-router-dom"; // Import useNavigate

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
  const navigate = useNavigate(); // Initialize navigate function
  const daysData: { date: string; سرعت: number }[] = [];

  for (let i = 0; i < 30; i++) {
    const date = new Date();
    date.setDate(date.getDate() - (i + 1));

    const formattedDate = date.toISOString().split("T")[0];
    const { minTemp, maxTemp } = useWeatherData(formattedDate, weatherData);

    if (
      typeof minTemp === "number" &&
      typeof maxTemp === "number" &&
      isFinite(minTemp) &&
      isFinite(maxTemp)
    ) {
      const سرعت = (minTemp + maxTemp) / 2;
      daysData.push({
        date: date.toLocaleDateString("fa-IR"), 
        سرعت: parseFloat(سرعت.toFixed(2)), 
      });
    }
  }

  // Check if there is no data, and navigate to the 404 page if true
  if (daysData.length === 0) {
    navigate("/map/NotFound/database"); // Use navigate correctly
    return null; // Return null to prevent rendering
  }

  // Reverse the data for correct display
  const reversedDaysData = [...daysData].reverse();

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={reversedDaysData}
        margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="2 3" />
        <XAxis dataKey="date" />
        <YAxis label={{ value: 'میزان باد (متر/ثانیه)', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="سرعت" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TemperatureChart;
