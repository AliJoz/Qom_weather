import React from "react";
import { useParams,Navigate  } from "react-router-dom";
type RegionDataType = {
  [key: string]: string;
};

const regionData: RegionDataType = {
  "منطقه یک": "اطلاعات مربوط به منطقه یک",
  "منطقه دو": "اطلاعات مربوط به منطقه دو",
  "منطقه سه": "اطلاعات مربوط به منطقه سه",
  "منطقه چهار": "اطلاعات مربوط به منطقه چهار",
  "منطقه پنج": "اطلاعات مربوط به منطقه پنج",
  "منطقه شش": "اطلاعات مربوط به منطقه شش",
  "منطقه هفت": "اطلاعات مربوط به منطقه هفت",
  "منطقه هشت": "اطلاعات مربوط به منطقه هشت",
};



const MainRegion: React.FC = () => {
  const { region } = useParams<{ region?: string }>(); 

  if (!region || !regionData[region]) {
    return <Navigate to="../NotFound/notFound.tsx" replace />;
  }

  return (
    <div>
      <h2>{region}</h2>
      <p>{regionData[region]}</p>
    </div>
  );
};

export default MainRegion;