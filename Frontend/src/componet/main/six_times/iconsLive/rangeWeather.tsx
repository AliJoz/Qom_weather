const ShowIcons = (
    tempMin: number,
    tempMax: number,
    hum: number,
    timeClock: string
  ): string => {
    const hour = parseInt(timeClock, 10);
  
    const dayRanges = [
      { min: -Infinity, max: 10, icon: "/icons/snowy.svg" },
      { min: 10, max: 20, icon: "/icons/rainy.svg" },
      { min: 20, max: 30, icon: "/icons/cloudyday.svg" },
      { min: 30, max: Infinity, icon: "/icons/day.svg" },
    ];
  
    const nightRanges = [
      { min: -Infinity, max: 10, icon: "/icons/cloudynight.svg" },
      { min: 10, max: 20, icon: "/icons/cloudynight.svg" },
      { min: 20, max: 30, icon: "/icons/cloudynight.svg" },
      { min: 30, max: Infinity, icon: "/icons/night.svg" },
    ];
  
    const ranges = hour >= 7 && hour < 17 ? dayRanges : nightRanges;
  
    for (const range of ranges) {
      if (tempMin >= range.min && tempMax < range.max) {
        return range.icon;
      }
    }
  
    return "/img/404/404.jpg";
  };
  