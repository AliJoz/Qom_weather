import React, {useState ,useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../../Hook/Axsios/DataProviderProps";
import Main from "../MainShow/StructureMain";
import LiveClock from "../MainShow/LiveClock/LiveClock";
type RegionDataType = {
  [key: string]: {
    info: string;
    deviceId: number;
  };
};

const regionData: RegionDataType = {
  "منطقه سه": { info: "اطلاعات مربوط به منطقه سه", deviceId: 1 },
  "منطقه هشت": { info: "اطلاعات مربوط به منطقه هشت", deviceId: 2 },
};

const MainRegion: React.FC = () => {
  const { region } = useParams<{ region?: string }>();
  const data = useContext(DataContext);
  const navigate = useNavigate(); // استفاده از useNavigate

  let filteredData = data;
  let info = "تمام داده‌های موجود";

  if (region && regionData[region]) {
    const { deviceId } = regionData[region];
    filteredData = data.filter((item) => item.device_id === deviceId);
    info = regionData[region].info;
  } else if (!region) {
    const deviceIds = Object.values(regionData).map(
      (region) => region.deviceId
    );
    filteredData = data.filter((item) => deviceIds.includes(item.device_id));
    info = "اطلاعات مربوط به هر دو منطقه";
  } else {
    return <Navigate to="../NotFound/notFound" replace />;
  }

  useEffect(() => {
    if (filteredData.length === 0) {
      navigate("/region/NotFound/database");
    }
  }, [filteredData, navigate]); // افزودن وابستگی‌ها

  // نمایش null تا زمان تغییر مسیر
  if (filteredData.length === 0) {
    return null;
  }
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="flex  h-screen  bg-neutral-200 relative  dark:bg-gray-800" dir="ltr">
       <div
          className="absolute left-1  top-8 md:top-2"
          onClick={toggleDarkMode}
        >
          {/* Dynamically render the correct icon based on isDarkMode */}
          <svg className="ml-3 mb-3  w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12   text-salte-300 dark:text-neutral-200">
            <use href={isDarkMode ? "#Sun" : "#Moon"}></use>
          </svg>
        </div>
       
      <div className="flex flex-col flex-1 space-y-2">
      <div className="hidden lg:block w-72 absolute top-1   right-6 text-xl tracking-wide mr-7 font-bold font-yekan text-zinc-700 dark:text-white">
        <LiveClock />
      </div>

        <Main weatherData={filteredData} />
      </div>
    </div>
  );
};

export default MainRegion;
