import React, { useState, useEffect } from "react";
import Main from "./componet/main/boxSerch";
import { Routes, Route } from "react-router-dom";
import MainFooter from "./componet/Footer/FooterMain";
import Mainregion from "./componet/region/Mainregion";
import NotFound from "./componet/NotFound/notFound";
import DataProvider from "./Axsios/DataProviderProps";
import Loders from "./componet/Loder/Loder";
import Map from "./componet/chart/chart";
import Sidebar from "./componet/sidebar";
import Test from "./test/Test";
import Icons from "./componet/icons";

// import ErrorBoundary from './Error/Errors'; // مسیر به `ErrorBoundary`
const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <DataProvider>
      {loading ? (
        <Loders /> // نمایش لودر در حین بارگذاری
      ) : (
        <div>
          <div className="float-right flex flex-row-reverse h-screen bg-gray-800 text-white">
            <Icons />
            <Sidebar />
          </div>

          {/* <Test /> */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/map" element={<Map />} />
            <Route path="/setting" element={<MainFooter />} />
            <Route path="/region/:region" element={<Mainregion />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      )}
    </DataProvider>
  );
};

export default App;
