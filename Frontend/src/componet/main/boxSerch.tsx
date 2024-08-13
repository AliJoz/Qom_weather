import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icons from "../icons";
import Sidebar from "../sidebar";
import MainApp from "../main";

const Main: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const navigate = useNavigate(); // استفاده از useNavigate برای هدایت به مسیر جدید

  const options = [
    "منطقه یک",
    "منطقه دو",
    "منطقه سه",
    "منطقه چهار",
    "منطقه پنج",
    "منطقه شش",
    "منطقه هفت",
    "منطقه هشت",
  ];

  const handleInputClick = () => {
    if (inputValue.trim() !== '') {
      setShowDropdown(true);
    }
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    setShowDropdown(false);
    navigate(`/region/${option}`); // هدایت به مسیر جدید بر اساس انتخاب کاربر
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (event.target.value.trim() !== '') {
      setShowDropdown(true);
      setHighlightedIndex(-1); // ریست کردن شاخص گزینه هایلایت شده
    } else {
      setShowDropdown(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showDropdown) return;

    if (event.key === 'ArrowDown') {
      setHighlightedIndex((prevIndex) => 
        (prevIndex + 1) % filteredOptions.length
      );
    } else if (event.key === 'ArrowUp') {
      setHighlightedIndex((prevIndex) =>
        (prevIndex + filteredOptions.length - 1) % filteredOptions.length
      );
    } else if (event.key === 'Enter') {
      if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
        handleOptionClick(filteredOptions[highlightedIndex]);
      } else {
        navigate(`/region/${inputValue}`);
      }
    }
  };

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="flex flex-row-reverse h-screen bg-gray-800 text-white">
      <Icons />
      <Sidebar />
      <div className="flex flex-col flex-1">
        <div className="flex justify-end p-6">
          <div className="relative">
            <input
              type="text"
              placeholder="لطفا منطقه مورد نظر را وارد کنید:منطقه یک"
              className="flex p-2 w-96 bg-gray-700 text-right pr-2 rounded-lg font-yekan"
              value={inputValue}
              onClick={handleInputClick}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown} // مدیریت رویدادهای صفحه‌کلید
            />
            {showDropdown && filteredOptions.length > 0 && (
              <ul className="absolute z-10 w-96 bg-gray-700 text-right mt-2 rounded-lg shadow-lg">
                {filteredOptions.map((option, index) => (
                  <li
                    key={index}
                    className={`p-2 cursor-pointer ${
                      highlightedIndex === index ? 'bg-gray-600' : ''
                    }`}
                    onClick={() => handleOptionClick(option)}
                    onMouseEnter={() => setHighlightedIndex(index)} // تغییر شاخص هنگام hover کردن
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <MainApp />
      </div>
    </div>
  );
};

export default Main;
