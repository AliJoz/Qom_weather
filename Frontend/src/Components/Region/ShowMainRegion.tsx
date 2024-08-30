import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../../Hook/Axsios/DataProviderProps";
import Main from "../MainShow/StructureMain";

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

  return (
    <div className="flex flex-row-reverse h-screen bg-gray-800 text-white">
      <div className="flex flex-col flex-1">
        <div className="flex justify-end p-6 pr-30"></div>
        <Main weatherData={filteredData} />
      </div>
    </div>
  );
};

export default MainRegion;
