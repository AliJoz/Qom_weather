import React from "react";

// تعریف نوع داده‌های ورودی
interface ShowIconsProps {
  tempMin: number;
  tempMax: number;
  hum: number;
  timeClock: string;
}

// تبدیل به تابعی که فقط یک string برمی‌گرداند
const ShowIcons = ({ tempMin, tempMax, hum, timeClock }: ShowIconsProps): string => {
  const hour = parseInt(timeClock, 10);
  const isDayTime = hour >= 6 && hour < 18; // بررسی روز یا شب بودن

  const avgTemp = (tempMin + tempMax) / 2; // محاسبه دمای میانگین
  let selectedIcon = "/img/404/404.jpg"; // مقدار پیش‌فرض

  if (avgTemp >= 10 && avgTemp <= 20) {
    if (hum >= 0 && hum <= 15) {
      selectedIcon = isDayTime ? "/icons/day.svg" : "/icons/night.svg";
    } else if (hum > 15 && hum <= 30) {
      selectedIcon = isDayTime ? "/icons/cloudyday.svg" : "/icons/cloudynight.svg";
    } else if (hum > 30) {
      selectedIcon = isDayTime ? "/icons/rainy.svg" : "/icons/thunder.svg";
    }
  } else if (avgTemp > 20 && avgTemp <= 30) {
    if (hum >= 0 && hum <= 15) {
      selectedIcon = isDayTime ? "/icons/cloudyday.svg" : "/icons/cloudynight.svg";
    } else if (hum > 15 && hum <= 30) {
      selectedIcon = isDayTime ? "/icons/cloudyday.svg" : "/icons/cloudynight.svg";
    } else if (hum > 30) {
      selectedIcon = isDayTime ? "/icons/rainy.svg" : "/icons/thunder.svg";
    }
  } else if (avgTemp > 30 && avgTemp <= 40) {
    if (hum >= 0 && hum <= 20) {
      selectedIcon = isDayTime ? "/icons/cloudyday.svg" : "/icons/night.svg";
    } else if (hum > 20) {
      selectedIcon = isDayTime ? "/icons/rainy.svg" : "/icons/thunder.svg";
    }
  } else if (avgTemp > 40) {
    selectedIcon = isDayTime ? "/icons/day.svg" : "/icons/night.svg";
  }

  return selectedIcon;
};

export default ShowIcons;
