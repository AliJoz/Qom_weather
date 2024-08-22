import React, { useContext } from 'react';
import { DataContext } from '../Axsios/DataProviderProps'; // فرض بر اینکه DataProvider در همین مسیر است

const FilteredData: React.FC<{ date: string }> = ({ date }) => {
    const data = useContext(DataContext); // دریافت داده‌ها از DataContext

    // فیلتر کردن داده‌ها براساس تاریخ مشخص
    const filteredData = data.filter(item => item.create_date === date);

    // محاسبه بیشترین و کمترین مقادیر
    const minTemp = Math.min(...filteredData.map(item => item.temp));
    const maxTemp = Math.max(...filteredData.map(item => item.temp));

    const minHum = Math.min(...filteredData.map(item => item.hum));
    const maxHum = Math.max(...filteredData.map(item => item.hum));

    const minSpeed = Math.min(...filteredData.map(item => item.speed));
    const maxSpeed = Math.max(...filteredData.map(item => item.speed));

    return (
        <div>
            <h2>Data for {date}</h2>
            <p>Minimum Temperature: {minTemp}</p>
            <p>Maximum Temperature: {maxTemp}</p>
            <p>Minimum Humidity: {minHum}</p>
            <p>Maximum Humidity: {maxHum}</p>
            <p>Minimum Speed: {minSpeed}</p>
            <p>Maximum Speed: {maxSpeed}</p>

            <h3>All Filtered Data</h3>
            <ul>
                {filteredData.map(item => (
                    <li key={item.id}>
                        ID: {item.id}, Temp: {item.temp}, Hum: {item.hum}, Speed: {item.speed}, Date: {item.create_date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilteredData;
