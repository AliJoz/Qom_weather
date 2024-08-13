import React from "react";

const Right: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="bg-gray-700 p-4 rounded-lg w-full sm:w-[400px] md:w-[550px] lg:w-[700px]  mr-4">
        <h3 className="flex justify-end text-lg sm:text-xl mb-4 font-bold tracking-wide">
          امروز
        </h3>
        <div className="flex justify-between">
          <div className="flex">
            <div className="flex flex-col items-center">
              <span className="text-xs sm:text-sm font-iranBlack">6:00 AM</span>
              <img
                src="/public/icons/animated/night.svg"
                alt="Cloudy"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
              />
              <span className="text-base sm:text-lg font-iran-Dem">25°</span>
            </div>
            <div className="w-0.5 h-20 bg-slate-600 block ml-3"></div>
          </div>
          {/* برای زمان‌های دیگر */}
        </div>
      </div>
      <div className="bg-gray-700 p-4 lg:p-1 rounded-lg w-full sm:w-[500px] md:w-[600px] lg:w-[700px]">
        <h3 className="flex justify-end text-lg sm:text-xl mb-4 font-bold">
          شاخص های هوا
        </h3>
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col items-center font-yekan mb-4 sm:mb-0">
            <span className="text-sm">دما واقعی</span>
            <span className="text-lg">30°</span>
          </div>
          <div className="flex flex-col items-center font-yekan mb-4 sm:mb-0">
            <span className="text-sm">سرعت باد</span>
            <span className="text-lg">0.2 km/h</span>
          </div>
          <div className="flex flex-col items-center font-yekan mb-4 sm:mb-0">
            <span className="text-sm">جهت باد</span>
            <span className="text-lg">شمال</span>
          </div>
          <div className="flex flex-col items-center font-yekan">
            <span className="text-sm">شاخص اشعه ماوراء بنفش</span>
            <span className="text-lg">3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
