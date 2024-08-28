import React from "react";
import Today from "./todays/today";
import WeatherDisplay from "./six_times/dataMulty";
import ViewWeather from './six_times/viewMulty';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

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

interface TimeBlock {
  time: string;
  temperature: number;
  temp: string;
  icons: string;
}

interface ViewWeatherProps {
  data: TimeBlock;
}

interface LeftLiveProps {
  weatherData: WeatherData[];
}

const LeftLive: React.FC<LeftLiveProps> = ({ weatherData }) => {
  // استفاده از weatherData به عنوان ورودی برای نمایش داده‌ها
  const weatherDataArray = WeatherDisplay(weatherData);

  return (
    <div className="flex flex-col justify-between space-y-9">
      <div className="bg-gray-700 p-4 rounded-lg w-full sm:w-[400px] md:w-[550px] lg:w-[700px] mr-4">
        <h3 className="flex justify-end text-lg sm:text-xl mb-4 font-bold tracking-wide">
          امروز
        </h3>
        <Swiper
          className="swiper"
          modules={[Navigation]}
          slidesPerView={5}
          direction={window.innerWidth <= 760 ? "vertical" : "horizontal"}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {weatherDataArray.map((weatherData, index) => (
            <SwiperSlide key={index}>
              <ViewWeather data={weatherData} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="bg-gray-700 p-4 lg:p-1 rounded-lg w-full sm:w-[500px] md:w-[600px] lg:w-[700px]  ">
        <Today weatherData={weatherData} />
      </div>
    </div>
  );
};

export default LeftLive;
