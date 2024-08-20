import React from 'react';

const Last7Days = () => {
    // Assuming data is an array of objects with the last 7 days' weather data
    const data = [
        { day: 'شنبه', maxTemp: 36, minTemp: 23, icon: 'sunny.svg' },
        { day: 'یک‌شنبه', maxTemp: 34, minTemp: 21, icon: 'cloudy.svg' },
        { day: 'دوشنبه', maxTemp: 35, minTemp: 22, icon: 'rainy.svg' },
        { day: 'سه‌شنبه', maxTemp: 37, minTemp: 24, icon: 'stormy.svg' },
        { day: 'چهارشنبه', maxTemp: 33, minTemp: 20, icon: 'sunny.svg' },
        { day: 'پنج‌شنبه', maxTemp: 38, minTemp: 25, icon: 'sunny.svg' },
        { day: 'جمعه', maxTemp: 32, minTemp: 19, icon: 'cloudy.svg' }
    ];

    return (
        <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold text-right">7 روز گذشته</h2>
            {data.map((dayData, index) => (
                <div key={index} className="flex justify-between items-center bg-gray-700 text-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center">
                        <img
                            src={`/icons/${dayData.icon}`}
                            alt="Weather Icon"
                            className="w-8 h-8 mr-2"
                        />
                        <span className="text-lg font-bold">{dayData.day}</span>
                    </div>
                    <div className="text-lg font-semibold">
                        {dayData.maxTemp}° / {dayData.minTemp}°
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Last7Days;
