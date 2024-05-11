import React, { useState, useEffect } from "react";
import Main from "./Components/MainShow/boxSerch";
import { Routes, Route } from "react-router-dom";
import MainFooter from "./Components/Footer/FooterMain";
import Mainregion from "./Components/Region/ShowMainRegion";
import NotFound from "./Components/NotFound/notFound";
import DataProvider from "./Hook/Axsios/DataProviderProps";
import Loders from "./Components/Loder/Loder";
import Map from "./Components/Chart/chart";
import Sidebar from "./Components/Sidebar";
import Icons from "./Components/Icons";
import Region from "./Components/Region/StructureBtnRegion";
import DatabaseNotfound from "./Components/NotFound/database";
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
        <>
          <div className="scrollbar  scrollbar-thumb-neutral-700 scrollbar-track-zinc-900 flex h-screen  overflow-auto" dir="rtl">
            {/* محتوای اصلی */}
            <div className="flex-grow mr-20">
              {" "}
              {/* اضافه کردن margin برای فاصله از سایدبار */}
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/map" element={<Map />} />
                <Route path="/setting" element={<MainFooter />} />
                <Route path="/region" element={<Region />} />
                <Route path="/region/:region" element={<Mainregion />} />
                <Route
                  path="map/NotFound/database"
                  element={<DatabaseNotfound />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>

            {/* سایدبار و آیکون‌ها */}
            <div className="fixed top-0 right-0 h-full w-20 bg-gray-800 text-white z-10">
              <Icons />
              <Sidebar />
            </div>
          </div>
        </>
      )}
    </DataProvider>
  );
};

export default App;
