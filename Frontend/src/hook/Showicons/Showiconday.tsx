import React from "react";

// تعریف نوع داده‌های ورودی
interface ShowIconsProps {
  tempMin: number;
  tempMax: number;
}

const ShowIcons = ({ tempMin, tempMax }: ShowIconsProps): string => {
  const avgTemp = (tempMin + tempMax) / 2; 
  let selectedIcon = "/img/404/404.jpg"; 

  if (avgTemp > 20) {
    selectedIcon = "/icons/day.svg"; 
  } else if (avgTemp >= 16 && avgTemp <= 20) {
    selectedIcon = "/icons/cloudyday.svg"; 
  } else if (avgTemp > 10 && avgTemp < 16) {
    selectedIcon = "/icons/rainy.svg"; 
  } else if (avgTemp <= 10) {
    selectedIcon = "/icons/snowy.svg";
  }

  return selectedIcon;
};

export default ShowIcons;
