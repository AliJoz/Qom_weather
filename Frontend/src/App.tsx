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
import Icons from "./componet/icons";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <DataProvider>
      {loading ? (
        <Loders /> 
      ) : (
        <div className="flex h-screen ">
        
        <div className="fixed top-0 right-0 h-full  bg-gray-800 text-white flex flex-col">
            <Icons />
            <Sidebar /> {/* سایدبار */}
          </div>

          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/map" element={<Map />} />
              <Route path="/setting" element={<MainFooter />} />
              <Route path="/region/:region" element={<Mainregion />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      )}
    </DataProvider>
  );
};

export default App;
