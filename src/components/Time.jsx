import React, { useEffect, useState } from "react";

const Time = () => {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  return (
    <div className="flex items-center justify-center h-full time-tray w-[5%]">
      <h1 className="text-white text-lg">{time}</h1>
    </div>
  );
};

export default Time;
