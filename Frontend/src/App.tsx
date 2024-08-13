import React from "react";
import Main from "./componet/main/boxSerch";
import { Routes, Route } from "react-router-dom";
import MainFooter from "./componet/Footer/FooterMain";
import Mainregion from "./componet/region/Mainregion";
import NotFound from "./componet/NotFound/notFound";
import DataProvider from "./Axsios/DataProviderProps";
import WeatherDisplay from './test/Test';
// import ErrorBoundary from './Error/Errors'; // مسیر به `ErrorBoundary`
const App: React.FC = () => {
  return (
    <>
       <DataProvider>
            <WeatherDisplay />
        </DataProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/setting" element={<MainFooter />} />
        <Route path="/region/:region" element={<Mainregion />} />
        <Route path="*" element={<NotFound />} />
        {/* مسیرهای دیگر */}
      </Routes>
    </>
  );
};

export default App;
