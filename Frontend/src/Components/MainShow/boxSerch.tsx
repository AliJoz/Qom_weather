import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import MainApp from "./StructureMain";
import { DataContext } from "../../Hook/Axsios/DataProviderProps";
import LiveClock from "./LiveClock/LiveClock";

const Main: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  // Initialize dark mode state from localStorage or system preference
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const navigate = useNavigate();
  const options = ["منطقه سه", "منطقه هشت"];

  // Effect to apply the initial theme state on component mount and update localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

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

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className="flex flex-row-reverse h-screen bg-neutral-200 dark:bg-gray-800 text-   relative"
      dir="ltr"
    >
      <div className="hidden lg:block w-72 absolute top-6   right-0 text-xl tracking-wide mr-7 font-bold font-yekan text-zinc-700 dark:text-white">
        <LiveClock />
      </div>

      <div className="flex flex-col flex-1 space-y-2 relative">
        <div className="flex justify-end p-6 pr-30">
          <div className="absolute top-2 left-12 md:top-4 md:h-10  md:left-50 lg:left-96">
            <input
              type="text"
              placeholder="لطفا منطقه مورد نظر را وارد کنید:منطقه سه "
              className="flex mr-2 pl-6  md:p-2 w-56 md:w-96 lg:w-[460px] border-slate-300 dark:bg-gray-700 md:text-right pr-2 rounded-lg font-yekan bg-neutral-100 text-zinc-700 dark:bg-white/5 dark:text-white text-sm sm:pl-12 3xl:w-80 h-full placeholder-sm md:placeholder-md placeholder:text-neutral-100 lg:placeholder-lg"
              value={inputValue}
              onClick={handleInputClick}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            {showDropdown && filteredOptions.length > 0 && (
              <ul className="absolute z-10 w-56 md:w-96 text-zinc-900 bg-yellow-100 dark:bg-gray-700 text-right mt-2 rounded-lg shadow-lg">
                {filteredOptions.map((option, index) => (
                  <li
                    key={index}
                    className={`p-2 cursor-pointer ${
                      highlightedIndex === index
                        ? "bg-yellow-300 text-zinc-800 dark:bg-gray-600"
                        : ""
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
        <div
          className="absolute left-1 md:left-[50px] lg:left-80 top-1 md:top-2"
          onClick={toggleDarkMode}
        >
          {/* Dynamically render the correct icon based on isDarkMode */}
          <svg className="ml-3 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12   text-salte-300 dark:text-neutral-200">
            <use href={isDarkMode ? "#Sun" : "#Moon"}></use>
          </svg>
        </div>

        <MainApp weatherData={filteredData} />
      </div>
    </div>
  );
};

export default Main;
