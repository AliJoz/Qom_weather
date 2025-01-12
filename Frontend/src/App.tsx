import React, { useState, useEffect } from "react";
import Main from "./Components/MainShow/boxSerch";
import { Routes, Route } from "react-router-dom";
import MainFooter from "./Components/Footer/FooterMain";
import Mainregion from "./Components/Region/ShowMainRegion";
import NotFound from "./Components/NotFound/notFound";
import DataProvider from "./Hook/Axsios/DataProviderProps";
import Loders from "./Components/Loder/Loder";
import MapTemp from "./Components/Chart/chartTemp";
import MapSpeed from "./Components/Chart/CartSpeed";
import Sidebar from "./Components/Sidebar";
import Region from "./Components/Region/StructureBtnRegion";
import DatabaseNotfound from "./Components/NotFound/database";
import Test from "./test/Test";
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
        <div className="bg-neutral-200  dark:bg-gray-800">
          <div
            className="scrollbar  scrollbar-thumb-zinc-700 scrollbar-track-zinc-100 dark:scrollbar-thumb-zinc-100 dark:scrollbar-track-zinc-800  flex h-screen w-full  overflow-auto"
            dir="rtl"
          >
            {/* محتوای اصلی */}

            <div className="flex-grow mr-20">
              {" "}
              {/* <Test /> */}
              {/* اضافه کردن margin برای فاصله از سایدبار */}
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/map/Temp" element={<MapTemp />} />
                <Route path="/map/Speed" element={<MapSpeed />} />
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
            <div className="fixed top-0 right-0 md:h-full  md:w-20 bg-neutral-200  dark:bg-gray-800 text-white z-10">
              
              <Sidebar />
            </div>
          </div>
        </div>
      )}
    </DataProvider>
  );
};

export default App;
