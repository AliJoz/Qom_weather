import React, { useContext, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { DataContext } from "../../Hook/Axsios/DataProviderProps";
import useWeatherData from "../../Hook/sevenDay/seven";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const daysData: { date: string; minTemp: string; maxTemp: string }[] = [];

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
      daysData.push({
        date: date.toLocaleDateString("fa-IR"),
        maxTemp: maxTemp.toFixed(2),
        minTemp: minTemp.toFixed(2),
      });
    }
  }

  // Effect to navigate if no data is present
  useEffect(() => {
    if (!daysData.length) {
      navigate("/map/NotFound/database");
    }
  }, [daysData, navigate]); // Add dependencies

  // Return null while the navigation happens
  if (!daysData.length) {
    return null; 
  }

  // Reverse the data for correct display
  const reversedDaysData = [...daysData].reverse();

  return (
    <div className="bg-neutral-200 h-screen w-full">
      <ResponsiveContainer width="100%" height={600}>
        <BarChart
          data={reversedDaysData}
          margin={{ top: 10, right: 90, left: -25, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="2 4" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12, fill: "#212121", fontFamily: "IRANSans" }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="maxTemp" fill="#FFA726" name="حداکثر دما" />
          <Bar dataKey="minTemp" fill="#29B6F6" name="حداقل دما" />
          <Line
            type="monotone"
            dataKey="maxTemp"
            stroke="#EF5350"
            strokeWidth={2}
            name="حداکثر دمای واقعی"
          />
          <Line
            type="monotone"
            dataKey="minTemp"
            stroke="#42A5F5"
            strokeWidth={2}
            name="حداقل دمای واقعی"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TemperatureChart;
