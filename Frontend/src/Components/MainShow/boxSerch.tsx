import React, { useState, useContext } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import MainApp from "./StructureMain";
import { DataContext } from "../../Hook/Axsios/DataProviderProps";
import LiveClock from "./LiveClock/LiveClock";
const Main: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const navigate = useNavigate();

  const options = ["منطقه سه", "منطقه هشت"];

  const handleInputClick = () => {
    if (inputValue.trim() !== "") {
      setShowDropdown(true);
    }
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    setShowDropdown(false);
    navigate(`/region/${option}`);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (event.target.value.trim() !== "") {
      setShowDropdown(true);
      setHighlightedIndex(-1);
    } else {
      setShowDropdown(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown) return;

    if (event.key === "ArrowDown") {
      setHighlightedIndex(
        (prevIndex) => (prevIndex + 1) % filteredOptions.length
      );
    } else if (event.key === "ArrowUp") {
      setHighlightedIndex(
        (prevIndex) =>
          (prevIndex + filteredOptions.length - 1) % filteredOptions.length
      );
    } else if (event.key === "Enter") {
      if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
        handleOptionClick(filteredOptions[highlightedIndex]);
      } else {
        navigate(`/region/${inputValue}`);
      }
    }
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  //

  type RegionDataType = {
    [key: string]: {
      info: string;
      deviceId: number;
    };
  };

  const regionData: RegionDataType = {
    "منطقه سه": { info: "اطلاعات مربوط به منطقه سه", deviceId: 1 },
    "منطقه پنج": { info: "اطلاعات مربوط به منطقه پنج", deviceId: 2 },
  };

  const { region } = useParams<{ region?: string }>();
  const data = useContext(DataContext);

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

  return (
    <div
      className="flex flex-row-reverse h-screen bg-gray-800 text-white  relative"
      dir="ltr"
    >
     <div className="w-72 absolute top-[82px] right-5 text-xl tracking-wide mr-7 font-bold font-yekan">
        {" "}
        <LiveClock />{" "}
      </div>  
    
      <div className="flex flex-col flex-1 space-y-2 relative">
        <div className="flex justify-end p-6 pr-30">
          <div className="relative">
            <input
              type="text"
              placeholder="لطفا منطقه مورد نظر را وارد کنید:منطقه سه"
              className="flex p-2 w-96 bg-gray-700 text-right pr-2 rounded-lg font-yekan"
              value={inputValue}
              onClick={handleInputClick}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            {showDropdown && filteredOptions.length > 0 && (
              <ul className="absolute z-10 w-96 bg-gray-700 text-right mt-2 rounded-lg shadow-lg">
                {filteredOptions.map((option, index) => (
                  <li
                    key={index}
                    className={`p-2 cursor-pointer ${
                      highlightedIndex === index ? "bg-gray-600" : ""
                    }`}
                    onClick={() => handleOptionClick(option)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className=" absolute  left-[720px] top-8">
        {/* {"icons "} */}
        <svg className="w-9 h-9 text-black">
          <use href="#Sun"></use>
        </svg>{" "}
      </div>  
        
        <MainApp weatherData={filteredData} />
      </div>
    </div>
  );
};

export default Main;
