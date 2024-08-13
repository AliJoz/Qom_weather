import React from 'react';

const Left: React.FC = () => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg w-full sm:w-[100px] md:w-[200px] lg:w-[300px]">
      <h3 className="text-lg sm:text-xl mb-4 font-bold">7 روز گذشته</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="flex items-center font-iranBlack">
            <img
              src="/public/icons/animated/snowy-1.svg"
              alt="Sunny"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 ml-2"
            />
            36°/22°
          </span>
          <span className="font-yekan">امروز</span>
        </div>
        {/* تکرار کد بالا برای روزهای دیگر */}
      </div>
    </div>
  );
};

export default Left;

