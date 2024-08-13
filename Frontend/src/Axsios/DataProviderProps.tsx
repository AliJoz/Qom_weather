import React, { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

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

interface DataProviderProps {
    children: React.ReactNode;
}

export const DataContext = createContext<WeatherData[]>([]);

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [data, setData] = useState<WeatherData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get<WeatherData[]>('http://localhost:3001/data');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Failed to fetch data');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
