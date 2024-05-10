import React from "react";
import useFilteredWeatherData from '../../../hook/main/today'; // Make sure this path is correct

const ViewToday = () => {
    const { filteredData } = useFilteredWeatherData();
console.log(filteredData);

    // Ensure filteredData is available and get the first item
    const item = filteredData && filteredData.length > 0 ? filteredData[0] : null;

    return (
        <div className="flex flex-col justify-center pl-9 relative">
            <div className="flex justify-between">
                <div className="relative">
                    <h2 className="text-4xl font-bold pb-2">قم</h2>
                    <p className="text-sm font-iran-Dem">
                        میزان رطوبت: {item ? `${item.hum.toFixed(2)}%` : '0%'}
                    </p>
                </div>
                <div>
                    <img
                        src="/icons/animated/snowy-1.svg" // Path should be relative to the public folder
                        alt="Weather Icon"
                        className="w-44 h-40"
                    />
                </div>
            </div>

            <div className="absolute top-24">
                <div className="flex items-center">
                    <span className="text-5xl font-bold">
                        {item ? `${item.temp.toFixed(2)}°` : '0°'}
                    </span>
                </div>
            </div>
        </div>
    );

};

export default ViewToday;
